/** @format */

"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

import { Button } from "@/modules/common/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/modules/common/ui/form";
import { Input } from "@/modules/common/ui/input";
import { Checkbox } from "@/modules/common/ui/checkbox";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/modules/common/ui/card";
import { Text } from "@/modules/common/components/text";
import { SignInSchema } from "@/lib/types/types";
import ToggleTheme from "./toggleTheme";
import { useRouter } from "next/navigation";
import { Separator } from "@/modules/common/ui/separator";
import { toast } from "sonner";

import { signIn } from "next-auth/react";
import { ExitIcon } from "@radix-ui/react-icons";
import HeaderText from "@/modules/common/ui/header-text";
import Link from "next/link";
import LoadingSvg from "@/modules/common/components/loading-svg";
import useLocalStorage from "@/hooks/use-localStorage";

type SignInType = z.infer<typeof SignInSchema>;

export default function SignInComp() {
  const session = useSession();

  const [storeValue, setValue] = useLocalStorage<SignInType>("pSign", {
    email: "",
    password: "",
  });

  // Keep me signed in state
  const [isChecked, setIsChecked] = useState(false);

  // 1. Define your form.
  const form = useForm<SignInType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    form.reset({
      email: storeValue.email,
      password: storeValue.password,
    });
  }, [storeValue, form]); // Reset form when signInData changes

  const { isValid, isSubmitting, isSubmitSuccessful } = form.formState;

  async function onSubmit(values: z.infer<typeof SignInSchema>) {
    signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: true,
      callbackUrl: "/",
    });

    const signInData = {
      email: values.email,
      password: values.password,
    };

    if (isChecked) {
      setValue(signInData);
    }
  }

  return (
    <div className='relative'>
      <div className='absolute top-4 left-0 md:right-16 px-4 flex items-center justify-between w-full'>
        <Link
          href={"/"}
          className='flex flex-col justify-center items-center space-x-1'>
          <HeaderText />
          <Text className='text-[12px] mr-2'>@tobi.wdev</Text>
        </Link>

        <ToggleTheme />
      </div>
      <div className='h-screen flex items-center justify-center'>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className='w-max h-max mt-16 md:mt-0'>
          <Card className='w-dvw md:w-[27rem] -mt-28 md:mt-0 border-none shadow-none md:shadow-md md:border-2 mx-auto md:px-8 pt-2 pb-6'>
            <CardHeader>
              <CardTitle className='text-center'>Welcome Back</CardTitle>
              <CardDescription className='text-center'>
                You have to be an admin to sign in
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='space-y-4'>
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type='email'
                            placeholder='Enter your email'
                            {...field}
                            className='w-full'
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Password'
                            type='password'
                            {...field}
                            className='w-full'
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className='flex gap-2 items-center'>
                    <Checkbox
                      id='keep_me_signed_in'
                      checked={storeValue ? true : false}
                      onClick={() => setIsChecked((prev) => !prev)}
                    />
                    <label htmlFor='keep_me_signed_in'>
                      <Text variant={"p"}>Keep me signed in</Text>
                    </label>
                  </div>
                  <div className='flex space-x-6'>
                    <SignInButton
                      isFormValid={isValid}
                      isLoading={isSubmitSuccessful}
                    />
                  </div>
                </form>
              </Form>
              <GoogleButton />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

const SignInButton = ({
  isFormValid,
  isLoading,
}: {
  isFormValid: boolean;
  isLoading: boolean;
}) => {
  return (
    <Button
      type='submit'
      disabled={!isFormValid}
      isLoading={isLoading}
      variant={"default"}
      className='w-full'>
      {isLoading ? "Signing In..." : "Sign In"}
    </Button>
  );
};

const GoogleButton = () => {
  const { push } = useRouter();
  const { status } = useSession();

  if (status === "authenticated") push("/");

  return (
    <>
      <div className='flex items-center justify-center gap-2 mt-4 overflow-hidden w-full'>
        <Separator className='w-32' />
        <Text variant={"h5"} className='text-gray-600'>
          or
        </Text>
        <Separator className='w-32' />
      </div>
      <div className='mt-4'>
        <Button
          onClick={() => signIn("google")}
          disabled={true}
          type='submit'
          variant={"default"}
          className='w-full flex gap-4 items-center'>
          <GoogleSVG />
          <Text variant={"p"}>Sign in with Google</Text>
        </Button>
      </div>
    </>
  );
};

const GoogleSVG = () => {
  return (
    <svg
      width='20px'
      height='20px'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z'
        fill='#4285F4'
      />
      <path
        d='M16.2863 29.9998C20.1434 29.9998 23.3814 28.7553 25.7466 26.6086L21.2386 23.1863C20.0323 24.0108 18.4132 24.5863 16.2863 24.5863C12.5086 24.5863 9.30225 22.1441 8.15929 18.7686L7.99176 18.7825L3.58208 22.127L3.52441 22.2841C5.87359 26.8574 10.699 29.9998 16.2863 29.9998Z'
        fill='#34A853'
      />
      <path
        d='M8.15964 18.769C7.85806 17.8979 7.68352 16.9645 7.68352 16.0001C7.68352 15.0356 7.85806 14.1023 8.14377 13.2312L8.13578 13.0456L3.67083 9.64746L3.52475 9.71556C2.55654 11.6134 2.00098 13.7445 2.00098 16.0001C2.00098 18.2556 2.55654 20.3867 3.52475 22.2845L8.15964 18.769Z'
        fill='#FBBC05'
      />
      <path
        d='M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z'
        fill='#EB4335'
      />
    </svg>
  );
};

/** @format */

"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";

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

type SignInType = z.infer<typeof SignInSchema>;

export default function SignInComp() {
  // Keep me signed in state
  const [isChecked, setIsChecked] = useState(false);

  const { push } = useRouter();

  // 1. Define your form.
  const form = useForm<SignInType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof SignInSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values, isChecked);
    if (values) {
      push("/");
    }
  }

  return (
    <div className='relative'>
      <div className='absolute top-4 right-4 md:right-16 flex justify-end '>
        <ToggleTheme />
      </div>
      <div className='h-screen flex items-center justify-center'>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className='w-max h-max'>
          <Card className='w-full md:w-[27rem] border-none shadow-none md:shadow-md md:border-2 mx-auto px-8 pt-2 pb-6'>
            <CardHeader>
              <CardTitle className='text-center'>Welcome Back</CardTitle>
              <CardDescription className='text-center'>
                Sign In to access your dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='space-y-8'>
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder='Enter your email' {...field} />
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
                          <Input placeholder='Password' type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className='flex gap-2 items-center'>
                    <Checkbox
                      id='keep_me_signed_in'
                      onClick={() => setIsChecked((prev) => !prev)}
                    />
                    <label htmlFor='keep_me_signed_in'>
                      <Text variant={"p"}>Keep me signed in</Text>
                    </label>
                  </div>
                  <div>
                    <Button
                      type='submit'
                      variant={"default"}
                      className='w-full'>
                      Submit
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

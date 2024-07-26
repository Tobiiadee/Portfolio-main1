/** @format */

"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ContactSchema } from "@/lib/types/types";
import { Button } from "@/modules/common/ui/button";
import { Input } from "@/modules/common/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/modules/common/ui/form";
import { Textarea } from "@/modules/common/ui/textarea";
import useSendFirebaseProject from "@/hooks/use-sendFirebaseData";
import { generatePath } from "@/lib/helpers/helpers";
import { toast } from "sonner";
import useSendEmail from "@/hooks/use-sendEmail";
import { useRouter } from "next/navigation";
import { ContactFormRequest } from "@/app/api/sendMail/route";

type ContactFormType = z.infer<typeof ContactSchema>;

const { generatedPath, uID } = generatePath("contacts");

export function ContactForm() {
  const { push } = useRouter();
  //Send data to firebase
  const { sendData, onSuccess, error, loading } =
    useSendFirebaseProject(generatedPath);

  //Send Email data
  const {
    sendMail,
    onSuccess: emailSuccess,
    loading: emailLoading,
  } = useSendEmail();

  // 1. Define your form.
  const form = useForm<ContactFormType>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof ContactSchema>) {
    const formData = {
      id: uID,
      status: "pending",
      name: values.name,
      email: values.email,
      message: values.message,
    };

    const emailData: ContactFormRequest = {
      address: values.email.trim(),
      name: values.name.trim(),
      message: values.message.trim(),
    };

    form.reset();
    sendMail(emailData);
    sendData(formData);
  }

  if (onSuccess) {
    toast.success("Thank you for reaching out to us");
    push("/");
  }

  if (error) {
    toast.error("There was an error sending your request");
  }

  const { isValid } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 w-full'>
        <div className='flex flex-col md:flex-row gap-4 w-full'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='font-semibold'>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter your name'
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
            name='email'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='font-semibold'>
                  Email (Required)
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter your email'
                    {...field}
                    className='w-full'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-semibold'>
                Tell us a little about your project... (Required)
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Tell us a little about your project...'
                  {...field}
                  className='min-h-[10rem] max-h-[10rem]'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          isLoading={emailLoading && loading}
          disabled={!isValid}
          type='submit'>
          React Out
        </Button>
      </form>
    </Form>
  );
}

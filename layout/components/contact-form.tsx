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

type ContactFormType = z.infer<typeof ContactSchema>;

export function ContactForm() {
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
  function onSubmit(values: z.infer<typeof ContactSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 w-full'>
        <div className='flex flex-col md:flex-row gap-4 w-full'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className="w-full">
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
              <FormItem className="w-full">
                <FormLabel className='font-semibold'>Email</FormLabel>
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
              <FormLabel className='font-semibold'>How can we help?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='How can we help?'
                  {...field}
                  className='min-h-[10rem] max-h-[10rem]'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}

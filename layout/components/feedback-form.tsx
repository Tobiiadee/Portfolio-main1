/** @format */

"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FeedBackSchema } from "@/lib/types/types";
import { Button } from "@/modules/common/ui/button";
import { Input } from "@/modules/common/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/modules/common/ui/form";
import { Textarea } from "@/modules/common/ui/textarea";

type FeedbackFormType = z.infer<typeof FeedBackSchema>;

export function FeedBackForm() {
  // 1. Define your form.
  const form = useForm<FeedbackFormType>({
    resolver: zodResolver(FeedBackSchema),
    defaultValues: {
      email: "",
      feedback: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof FeedBackSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-semibold'>Email</FormLabel>
              <FormControl>
                <Input placeholder='Enter your email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='feedback'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-semibold'>
                What do you think?
              </FormLabel>
              <FormControl>
                <Textarea placeholder='What do you think?' {...field} className="min-h-[10rem] max-h-[10rem]"/>
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

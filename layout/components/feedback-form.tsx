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
import useSendFirebaseProject from "@/hooks/use-sendFirebaseData";
import { generatePath } from "@/lib/helpers/helpers";
import { toast } from "sonner";
import { ContactFormRequest } from "@/app/api/sendMail/route";
import useSendEmail from "@/hooks/use-sendEmail";

type FeedbackFormType = z.infer<typeof FeedBackSchema>;

const { generatedPath, uID } = generatePath("feedbacks");

export function FeedBackForm() {
  //Send feedbacks to database
  const { sendData, error, loading, onSuccess } =
    useSendFirebaseProject(generatedPath);

  //Send Email data
  const { sendMail } = useSendEmail();

  // 1. Define your form.
  const form = useForm<FeedbackFormType>({
    resolver: zodResolver(FeedBackSchema),
    defaultValues: {
      email: "",
      feedback: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof FeedBackSchema>) {
    const feedbackData = {
      id: uID,
      email: values.email,
      message: values.feedback,
    };

    const emailData: ContactFormRequest = {
      address: values.email,
      message: values.feedback,
      feedback: true,
    };
    sendData(feedbackData);
    sendMail(emailData);
    setTimeout(() => {
      form.reset();
    }, 2000);
  }

  if (onSuccess) {
    toast.success("Thank you for your feedback!");
  }

  if (error) {
    toast.error("There was an error sending your feedback");
  }

  const { isValid } = form.formState;

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
                <Textarea
                  placeholder='What do you think?'
                  {...field}
                  className='min-h-[10rem] max-h-[10rem]'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' disabled={!isValid} isLoading={loading}>
          Send Feedback
        </Button>
      </form>
    </Form>
  );
}

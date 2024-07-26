/** @format */
"use client";

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/modules/common/ui/form";
import { Button } from "@/modules/common/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/modules/common/ui/dialog";
import { Input } from "@/modules/common/ui/input";
import { Textarea } from "@/modules/common/ui/textarea";
import { SendContactRequestSchema } from "@/lib/types/types";
import { ContactFormRequest } from "@/app/api/sendMail/route";
import useSendEmail from "@/hooks/use-sendEmail";
import { toast } from "sonner";

type ContactRequestPropType = {
  triggerRef: React.RefObject<HTMLButtonElement>;
  email: string;
  name: string;
};

type SendContactRequestType = z.infer<typeof SendContactRequestSchema>;

export function ContactRequestDialog({
  triggerRef,
  email,
  name,
}: ContactRequestPropType) {

  const { sendMail, loading, error, onSuccess } = useSendEmail();

  const form = useForm<SendContactRequestType>({
    resolver: zodResolver(SendContactRequestSchema),
    defaultValues: {
      email: email,
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SendContactRequestSchema>) {
    const emailData: ContactFormRequest = {
      address: values.email,
      subject: values.subject,
      message: values.message,
      request: true,
    };

    sendMail(emailData);
    setTimeout(() => form.reset(), 2000);
  }

  if (error) toast.error("Unable to send email");

  if (onSuccess) toast.success("Email Sent!");

  const { isValid } = form.formState;

  return (
    <Dialog>
      <DialogTrigger asChild ref={triggerRef} className='hidden'>
        <Button variant='outline'>Send Email</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[550px]'>
        <DialogHeader>
          <DialogTitle>Send Email To {name}</DialogTitle>
        </DialogHeader>
        <div className='grid gap-6 py-4'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
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
              <FormField
                control={form.control}
                name='subject'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='subject'
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
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className='w-full min-h-[10rem] max-h-[10rem]'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button disabled={!isValid} isLoading={loading} type='submit'>
                  Send
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

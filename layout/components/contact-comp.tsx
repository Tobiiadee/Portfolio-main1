/** @format */

"use client";

import { Text } from "@/modules/common/components/text";
import {
  CheckIcon,
  ClipboardCopyIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  MobileIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { MapPin } from "lucide-react";
import React, { useState } from "react";
import { ContactForm } from "./contact-form";
import { motion } from "framer-motion";
import Link from "next/link";
import { toast } from "sonner";
import { Button } from "@/modules/common/ui/button";
import { copyTextToClipboard } from "@/lib/helpers/copy-to-clipboard";

export default function ContactComp() {
  return (
    <div className='grid md:grid-cols-5 gap-10'>
      <div className='flex flex-col gap-8 md:col-span-2'>
        <div className='flex flex-col gap-8 overflow-hidden'>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <Text
              variant={"h1"}
              className='text-gray-500 uppercase flex items-center gap-2'>
              Reach out
            </Text>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className='flex flex-col gap-8'>
          <div className='fle flex-col gap-1'>
            <Text variant={"p"}>Have a question or need asistance?</Text>
            <Text variant={"p"}>Reach out to our support team.</Text>
            <Text variant={"p"}>
              We&apos;re here to help with any inquiries you have.
            </Text>
          </div>

          <div className='flex flex-col gap-4'>
            <ContactBullet text='Personalized Asistance' />
            <ContactBullet text='Timely Response' />
            <ContactBullet text='Comprehensive Support' />
          </div>

          <SocialContact />
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className='md:col-span-3'>
        <ContactForm />
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className=' w-full md:col-span-5 md:mt-24'>
        <ContactCards />
      </motion.div>
    </div>
  );
}

const ContactBullet = ({ text }: { text: string }) => {
  return (
    <div className='flex items-center gap-6 '>
      <div className='flex items-center justify-center rounded-full p-2 bg-foreground'>
        <CheckIcon className='h-4 w-4 text-background' />
      </div>

      <Text variant={"p"}>{text}</Text>
    </div>
  );
};

export const SocialContact = () => {
  return (
    <div className='flex items-center gap-4'>
      <Link href={""}>
        <div className='border rounded-md flex items-center justify-center p-2 group'>
          <TwitterLogoIcon className='w-6 h-5 group-hover:scale-110 transition duration-300' />
        </div>
      </Link>

      <Link href={""}>
        <div className='border rounded-md flex items-center justify-center p-2 group'>
          <GitHubLogoIcon className='w-6 h-5 group-hover:scale-110 transition duration-300' />
        </div>
      </Link>

      <Link href={""}>
        <div className='border rounded-md flex items-center justify-center p-2 group'>
          <LinkedInLogoIcon className='w-6 h-5 group-hover:scale-110 transition duration-300' />
        </div>
      </Link>
    </div>
  );
};

const ContactCards = () => {
  const onCopy = (
    e: React.MouseEvent<HTMLButtonElement>,
    copiedText: string
  ) => {
    const copiedTextType = e.currentTarget.textContent;
    if (copiedText) {
      toast(`${copiedTextType} Copied To Clipboard`);
    } else {
      toast(`Faild to copy text to clipboard`);
    }

    copyTextToClipboard(copiedText);
  };

  return (
    <div className='grid md:grid-cols-3 gap-4 w-full'>
      <div className='border rounded-md p-4 flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <div className='border rounded-md flex items-center justify-center p-1.5'>
            <EnvelopeClosedIcon className='w-4 h-4 group-hover:scale-110 transition duration-300' />
          </div>

          <Button
            variant={"ghost"}
            onClick={(e) => onCopy(e, "tobi.wdev@gmail.com")}
            className='group cursor-pointer'>
            <p className='hidden'>Email</p>
            <ClipboardCopyIcon className='group-hover:scale-110 transition duration-300' />
          </Button>
        </div>
        <div className='flex flex-col gap-0.5'>
          {" "}
          <Text variant={"h5"}>Email us</Text>
          <Text variant={"p"} className='text-gray-500'>
            tobi.wdev@gmail.com
          </Text>
        </div>
      </div>

      <div className='border rounded-md p-4 flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <div className='border rounded-md flex items-center justify-center p-1.5'>
            <MobileIcon className='w-4 h-4 group-hover:scale-110 transition duration-300' />
          </div>

          <Button
            variant={"ghost"}
            onClick={(e) => onCopy(e, "(+234) 08034685185")}
            className='group cursor-pointer'>
            <p className='hidden'>Phone Number</p>
            <ClipboardCopyIcon className='group-hover:scale-110 transition duration-300' />
          </Button>
        </div>
        <div className='flex flex-col gap-0.5'>
          <Text variant={"h5"}>Call us</Text>
          <Text variant={"p"} className='text-gray-500'>
            (+234) 08034685185
          </Text>
        </div>
      </div>

      <div className='border rounded-md p-4 flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <div className='border rounded-md flex items-center justify-center p-1.5'>
            <MapPin className='w-4 h-4 group-hover:scale-110 transition duration-300' />
          </div>
        </div>
        <div className='flex flex-col gap-0.5'>
          {" "}
          <Text variant={"h5"}>Our Location</Text>
          <Text variant={"p"} className='text-gray-500'>
            Lagos, Nigeria.
          </Text>
        </div>
      </div>
    </div>
  );
};

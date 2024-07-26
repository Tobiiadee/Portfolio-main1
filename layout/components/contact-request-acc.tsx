/** @format */
"use client";

import React, { useRef, MouseEvent } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/modules/common/ui/accordion";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Text } from "@/modules/common/components/text";
import { TrashIcon } from "./main-project-comp";
import { Button } from "@/modules/common/ui/button";
import { ContactRequestDialog } from "./contact-request-dialog";
import DeleteRequestAlert from "@/modules/common/components/request-alert";
import { motion } from "framer-motion";
import { ContactRequestStatus } from "./contact-request-status";

//TODO: status can either be "pending" | "ongoing" | "delivered" | "cancelled"

type RequestAccType = {
  name: string;
  email: string;
  message: string;
  status?: "pending" | "ongoing" | "delivered" | "cancelled";
  contactId: string;
  index: number;
};

export default function ContactRequestAcc({
  name,
  email,
  message,
  contactId,
  index,
  status,
}: RequestAccType) {
  const dialogRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.click();
    }
  };

  const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (triggerRef.current) {
      triggerRef.current.click();
    }
  };

  let statusColor;
  switch (status) {
    case "pending":
      statusColor = "bg-gray-600";
      break;

    case "ongoing":
      statusColor = "bg-orange-400";
      break;

    case "delivered":
      statusColor = "bg-green-600";
      break;

    case "cancelled":
      statusColor = "bg-red-600";
      break;
    default:
      statusColor = "";
      break;
  }

  return (
    <>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 * (index! + 1) }}
        className='flex gap-10'>
        <Accordion
          type='single'
          collapsible
          className='flex flex-col gap-6 w-full'>
          <AccordionItem value='item-1' className='flex flex-col gap-3'>
            <AccordionTrigger className='grid grid-cols-3 md:grid-cols-5 w-full '>
              <Text
                variant={"h5"}
                className='text-start col-span-2 hidden md:block'>
                {name || contactId}
              </Text>
              <Text
                variant={"h5"}
                className='col-span-2 text-start md:ml-[3.7rem]'>
                {email}
              </Text>
              <div className='flex gap-3 items-center w-max md:ml-[6rem]'>
                <Text variant={"h5"}>{status}</Text>
                <div className={`w-2 h-2 rounded-full ${statusColor}`}></div>
              </div>
            </AccordionTrigger>
            <AccordionContent className='flex w-full justify-between'>
              <div className='w-full'>{message}</div>
              <div className='w-1/5 flex justify-end'>
                <ContactRequestStatus contactId={contactId} CStatus={status!} />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className='hidden md:flex gap-4 items-start mt-3'>
          <Button variant={"ghost"} onClick={handleDelete}>
            <TrashIcon />
          </Button>
          <Button variant={"ghost"} onClick={() => openDialog()}>
            <EnvelopeClosedIcon />
          </Button>
        </div>
      </motion.div>

      <ContactRequestDialog name={name} email={email} triggerRef={dialogRef} />
      <DeleteRequestAlert
        title={`Delete ${name + "'s"} Request`}
        description='Are you sure what to delete this request'
        triggerRef={triggerRef}
        contactId={contactId}
      />
    </>
  );
}

{/* <p>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat libero
  laudantium eligendi amet neque dolorem cumque dolores id dolorum ipsum ab
  aspernatur iure adipisci inventore laborum esse sit, est doloribus. Inventore
  voluptatum animi optio quidem deserunt? Recusandae praesentium accusantium
  quasi tempore laboriosam magni. Quaerat exercitationem nam quam velit veniam
  tempore mollitia explicabo excepturi, modi dicta alias omnis sapiente eius
  sint suscipit ipsam deleniti, molestiae esse voluptatum natus pariatur saepe
  unde. Omnis ratione dolor veniam, sunt quis modi, officiis dicta laboriosam
  cupiditate voluptate corporis accusamus, fugit tempore non amet. Atque
  perspiciatis soluta assumenda ea ad omnis perferendis rem, eum doloribus
  tempora.
</p>; */}

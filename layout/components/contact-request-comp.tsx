/** @format */

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Text } from "@/modules/common/components/text";
import ContactRequestAcc from "./contact-request-acc";
import { Input } from "@/modules/common/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { SortByStatus } from "./sort-by-status";
import useGetFirebaseData from "@/hooks/use-getFirebaseData";
import { getAllKeys } from "@/lib/helpers/helpers";
import { Skeleton } from "@/modules/common/ui/skeleton";
import { toast } from "sonner";
import EmptyData from "@/modules/common/components/empty-data";

// Define the type for contact
type ContactType = {
  id: string;
  name: string;
  email: string;
  message: string;
  status: "pending" | "ongoing" | "delivered" | "cancelled";
};

// Define the type for the status
export type StatusType = "pending" | "ongoing" | "delivered" | "cancelled";

export default function ContactRequestComp() {
  const [searchNames, setSearchNames] = useState("");
  const [sortedStatus, setSortedStatus] = useState("");

  const { data, loading, error } = useGetFirebaseData("contacts", null);

  //Get all contacts using their keys
  const contacts = getAllKeys(data) as ContactType[];

  // Combine the name and status filters
  const filteredContacts = contacts.filter((contact) => {
    const matchesName = contact.name
      .toLowerCase()
      .includes(searchNames.toLowerCase());
    const matchesStatus = sortedStatus ? contact.status === sortedStatus : true;
    return matchesName && matchesStatus;
  });

  const handleStatusChange = (status: string) => {
    setSortedStatus(status);
  };

  return (
    <>
      {!loading && contacts.length === 0 ? (
        <EmptyData className='h-[70dvh]' module='contact request' />
      ) : (
        <div className='flex flex-col gap-16 overflow-hidden'>
          <div className='flex flex-col gap-4 md:flex-row justify-between items-start'>
            <div className='flex flex-col gap-8 overflow-hidden'>
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}>
                <Text
                  variant={"h1"}
                  className='text-gray-500 uppercase flex items-center gap-2'>
                  Contact Request
                </Text>
              </motion.div>
            </div>
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='flex flex-col gap-4 w-full md:w-2/6'>
              <div className='flex items-center gap-1 py-0.5 px-2 border rounded-md w-full'>
                <MagnifyingGlassIcon className='h-5 w-5' />
                <Input
                  onChange={(e) => setSearchNames(e.target.value)}
                  className='w-full border-none shadow-none focus-visible:ring-0'
                  placeholder='search request'
                />
              </div>
              <div className='flex justify-end'>
                <SortByStatus sortingStatus={handleStatusChange} />
              </div>
            </motion.div>
          </div>

          <div className='flex flex-col gap-6'>
            {!loading && (
              <div className='grid grid-cols-3 md:grid-cols-5 w-full'>
                <Text variant={"h5"} className='col-span-2 hidden md:block'>
                  Name
                </Text>
                <Text variant={"h5"} className='col-span-2'>
                  Email
                </Text>
                <Text variant={"h5"}>Status</Text>
              </div>
            )}
            {loading && (
              <div className='flex flex-col gap-8'>
                {Array.from({ length: 4 }).map((_, i) => (
                  <SkeletonContactRequest key={i} />
                ))}
              </div>
            )}
            {!loading && filteredContacts.length === 0 && (
              <EmptyData
                module='contact request that meets the selected status'
                className='mt-14 text-center'
              />
            )}
            {error && toast.error("An error occurred")}
            <AnimatePresence>
              {filteredContacts.map((contact, i) => (
                <motion.div
                  key={contact.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: 300 }}
                  transition={{ duration: 0.5 }}>
                  <ContactRequestAcc
                    index={i}
                    key={contact.id}
                    status={contact.status}
                    contactId={contact.id}
                    email={contact.email}
                    name={contact.name}
                    message={contact.message}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
    </>
  );
}

const SkeletonContactRequest = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='grid grid-cols-3 md:grid-cols-5 w-full'>
        <Skeleton className='w-16 h-4 col-span-2 hidden md:block' />
        <Skeleton className='w-16 h-4 col-span-2' />
        <Skeleton className='w-16 h-4' />
      </div>
      <div className='flex items-center gap-4 space-y-3'>
        <Skeleton className='w-full h-[4rem] rounded-md' />
        <div className='md:flex gap-4 hidden'>
          <Skeleton className='h-6 w-8' />
          <Skeleton className='h-6 w-8' />
        </div>
      </div>
    </div>
  );
};

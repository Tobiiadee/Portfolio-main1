/** @format */

"use client";

import React from "react";
import MainProjectComp from "./main-project-comp";
import { Text } from "@/modules/common/components/text";
import { Separator } from "@/modules/common/ui/separator";
import { motion } from "framer-motion";

export default function OngoingProjectComp() {
  return (
    <div className='flex flex-col gap-8'>
      <div className='overflow-hidden'>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className='flex gap-4 items-center justify-end w-full'>
          <Separator className='w-32' />
          <Text variant={"h4"} className='text-gray-500 font-semibold'>
            Ongoing Projects
          </Text>
        </motion.div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-14 overflow-hidden place-items-center py-4 px-4'>
        {Array.from({ length: 5 }).map((_, i) => (
          <MainProjectComp key={i} index={i} />
        ))}
      </div>
    </div>
  );
}

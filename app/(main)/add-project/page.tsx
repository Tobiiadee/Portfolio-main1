/** @format */
"use client";

import React from "react";
import AddProjectComp from "@/layout/components/add-project-comp";
import { Text } from "@/modules/common/components/text";
import { motion } from "framer-motion";

export default function AddProject() {
  return (
    <div className='flex flex-col gap-14'>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <Text variant={"h1"} className='text-gray-500'>
          ADD PROJECT
        </Text>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}>
        <AddProjectComp />
      </motion.div>
    </div>
  );
}

/** @format */
"use client";

import React from "react";
import MainProjectsComp from "@/layout/components/main-projects-comp";
import { Text } from "@/modules/common/components/text";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className='flex flex-col gap-8 overflow-hidden'>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='mb-8'>
        <Text variant={"h1"} className='text-gray-500'>
          PROJECTS
        </Text>
      </motion.div>

      <MainProjectsComp />
    </div>
  );
}

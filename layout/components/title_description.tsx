/** @format */

"use client";

import React from "react";
import { Text } from "@/modules/common/components/text";
import { motion } from "framer-motion";

const TitleDescription = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{duration: 0.7}}
      className='flex flex-col gap-8 lg:gap-10 lg:w-[40rem] mt-20'>
      <Text variant={"h4"}>
        We specialize in crafting exceptional digital experiences to help our
        clients achieve their business goals.
      </Text>
      <Text className='leading-20' variant={"h1"}>
        Product Design Experience
      </Text>
    </motion.div>
  );
};

export default TitleDescription;
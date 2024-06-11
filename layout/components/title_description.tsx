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
      className='flex flex-col gap-8 lg:gap-10 w-full lg:w-[45rem] mt-10 md:mt-20'>
      <Text variant={"h4"}>
        We specialize in crafting exceptional digital experiences to help our
        clients achieve their business goals.
      </Text>
      <Text className='md:leading-loose tracking-wider uppercase' variant={"h1"}>
      Empowering Your Vision with Design Excellence
      </Text>
    </motion.div>
  );
};

export default TitleDescription;

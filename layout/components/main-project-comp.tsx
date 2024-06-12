/** @format */
"use client";

import React from "react";
import { Text } from "@/modules/common/components/text";
import { motion } from "framer-motion";
import { ArrowRightIcon, OpenInNewWindowIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import img from "../../assets/TPF.jpg";
import Link from "next/link";

export default function MainProjectComp({ index }: { index: number }) {
  return (
    <Link href={"/projects/example"}>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2 * (index + 1) }}
        className='flex flex-col gap-4 w-max group px-2 py-1'>
        <div className='relative flex items-center justify-center border border-dotted rounded-xl w-full h-[18rem] md:w-[20rem] md:h-[15rem] transition duration-300 cursor-pointer overflow-hidden'>
          <Image
            src={img}
            alt='project thumbnail'
            width={300}
            height={300}
            className='group-hover:scale-110 transition duration-300 rounded-md'
          />
          <div className='absolute group-hover:-rotate-45 transition duration-300 top-4 left-4 bg-foreground w-8 h-8 rounded-full flex items-center justify-center'>
            <ArrowRightIcon className='text-background w-5 h-5' />
          </div>
        </div>
        <div className='group-hover:text-foreground text-gray-600 flex gap-2 items-center transition duration-300 ml-2 md:ml-0'>
          <Text variant={"p"} className='text-start'>
            Project title
          </Text>
          <OpenInNewWindowIcon />
        </div>
      </motion.div>
    </Link>
  );
}

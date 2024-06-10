/** @format */

"use client";

import Image from "next/image";
import React from "react";
import thumbN from "../../assets/TPF.jpg";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Text } from "@/modules/common/components/text";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectComp() {
  return (
    <Link href={"/projects"}>
      <div className='group flex justify-between items-start border border-dashed rounded-md hover:scale-105 transition duration-300 w-full px-4 py-2 cursor-pointer'>
        <div className='flex flex-col gap-1'>
          <Text variant={"h5"}>Project Title</Text>
          <Text variant={"p"} className="text-gray-500">Short description</Text>
        </div>
        <div>
          <ArrowRightIcon className='text-blue-500 w-4 h-4 group-hover:-rotate-45 transition duration-300' />
        </div>
      </div>
    </Link>
  );
}

// <Link href={"/projects"} passHref>
// <motion.div
//   initial={{ opacity: 0 }}
//   whileInView={{ opacity: 1 }}
//   transition={{ duration: 0.8 }}
//   viewport={{ once: true }}
//   className='relative group grid place-items-center md:bg-blue-50 w-[24rem] h-[24rem] md:w-[32rem] md:h-[26rem] rounded-3xl transition duration-500'>
//   <div className='relative w-[20rem] h-[16rem]  md:w-[24rem] md:h-[20rem] '>
//     <Image
//       src={thumbN}
//       alt='project thumbnail'
//       fill={true}
//       objectFit='contain'
//       className='group-hover:scale-105 rounded-2xl md:rounded-xl transition duration-500'
//     />
//   </div>

//   <div className='absolute top-4 left-4 flex bg-white items-center justify-center w-8 md:w-11 shadow-md aspect-[1/1] rounded-full '>
//     <ArrowRightIcon className='w-5 h-5 md:w-8 md:h-8 font-normal text-black group-hover:-rotate-45 transition duration-500' />
//   </div>

//   <div className='absolute left-1 bottom-5 md:-bottom-10 flex-col gap-3'>
//     <div className='group-hover:opacity-0 flex items-center gap-1.5 transition duration-700'>
//       <Text variant={"h5"}>Project Title</Text>
//       <ExternalLinkIcon />
//     </div>

//     <div className='opacity-0 group-hover:opacity-100 absolute left-0 bottom-0 w-max transition duration-700'>
//       <Text variant={"h5"}>Short Project Description</Text>
//     </div>
//   </div>
// </motion.div>
// </Link>

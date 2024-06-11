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
    <Link href={"/projects/example"}>
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

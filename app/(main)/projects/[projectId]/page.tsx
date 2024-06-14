/** @format */

import React from "react";
import { Text } from "@/modules/common/components/text";
import Image from "next/image";
import thumbnail from "../../../../public/images/TPF.jpg";
import { Button } from "@/modules/common/ui/button";
import Link from "next/link";

export default function ProductId({ params }: { params: { slug: string } }) {
  return (
    <div className='flex flex-col gap-20'>
      <div className='flex justify-between w-full'>
        <div className='flex flex-col gap-6'>
          <Text variant={"h2"}>Suitcase App</Text>
          <Text variant={"h3"}>Travel smart and safe</Text>
        </div>

        <div>
          <Link href={""} target='blank'>
            <Button variant={"outline"}>
              <Text variant={"p"}>View Live</Text>
            </Button>
          </Link>
        </div>
      </div>

      <Text variant={"h4"}>
        Ziggo is designed to provide travelers with peace of mind and enhanced
        security by offering a range of smart features that make managing
        luggage simpler and more efficient.
      </Text>
      <ProjectServicesMain />
      <ProjectServicesMobile />
      <div className='relative flex items-center justify-center w-full h-[25rem] md:h-[30rem] bg-gray-500 rounded-xl overflow-hidden'>
        <Image
          src={thumbnail}
          alt='project thumbnail'
          fill
          className='object-cover'
        />
      </div>

      <Text variant={"h4"}>
        Ziggo is designed to provide travelers with peace of mind and enhanced
        security by offering a range of smart features that make managing
        luggage simpler and more efficient. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Fugiat inventore atque animi. Similique
        vitae necessitatibus blanditiis perferendis nam quod, inventore impedit
        tempora nemo obcaecati, aliquam officiis dolore distinctio labore ex
        veritatis ipsam dolorem reprehenderit excepturi, qui delectus! Alias,
        dignissimos quibusdam perspiciatis, vitae odio sed nemo voluptatem est
        temporibus, iusto numquam?
      </Text>

      <div className='relative flex items-center justify-center w-full h-[25rem] md:h-[30rem] bg-gray-500 rounded-xl overflow-hidden'></div>
    </div>
  );
}

const ProjectServicesMain = () => {
  return (
    <div className='md:flex flex-col gap-1 hidden'>
      <div className='grid grid-cols-4'>
        <Text variant={"h5"}>Client</Text>
        <Text variant={"h5"}>Services</Text>
        <Text variant={"h5"}>Industry</Text>
        <Text variant={"h5"}>Date</Text>
      </div>
      <div className='grid grid-cols-4 text-gray-500'>
        <Text variant={"h5"}>Travel</Text>
        <Text variant={"h5"}>Visual Design UI & UX Design</Text>
        <Text variant={"h5"}>Travel</Text>
        <Text variant={"h5"}>November, 2023</Text>
      </div>
    </div>
  );
};
const ProjectServicesMobile = () => {
  return (
    <div className='flex flex-col gap-4  md:hidden'>
      <div className="space-y-1">
        <div className='grid grid-cols-2'>
          <Text variant={"h5"}>Client</Text>
          <Text variant={"h5"}>Services</Text>
        </div>
        <div className='grid grid-cols-2 text-gray-500'>
          <Text variant={"h5"}>Travel</Text>
          <Text variant={"h5"}>Visual Design UI & UX Design</Text>
        </div>
      </div>

      <div className="space-y-1">
        <div className='grid grid-cols-2'>
          <Text variant={"h5"}>Industry</Text>
          <Text variant={"h5"}>Date</Text>
        </div>

        <div className='grid grid-cols-2 text-gray-500'>
          <Text variant={"h5"}>Travel</Text>
          <Text variant={"h5"}>November, 2023</Text>
        </div>
      </div>
    </div>
  );
};

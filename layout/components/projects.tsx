/** @format */

import React from "react";
import ProjectComp from "./project-comp";
import { Text } from "@/modules/common/components/text";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { Button } from "@/modules/common/ui/button";
import Link from "next/link";

export default function Projects() {
  return (
    <div className='grid grid-cols-2 gap-6'>
      <div className='self-start col-span-2 md:col-span-1 flex justify-between md:justify-normal md:flex-col h-full'>
        <div className='flex items-start gap-6'>
          <DotFilledIcon className='w-4 h-4 hidden md:block' />
          <div className='flex flex-col gap-1 md:gap-1.5'>
            {" "}
            <Text variant={"h3"} className='font-normal'>
              Projects
            </Text>
            <Text variant={"p"} className='text-blue-500'>
              Ongoing Projects
            </Text>
          </div>
        </div>

        <div className='md:mt-auto self-end md:self-start'>
          <Link href={"/projects"}>
            <Button variant={"link"}>View All Projects</Button>
          </Link>
        </div>
      </div>

      <div className='flex flex-col col-span-2 md:col-span-1 gap-6 w-full'>
        {Array.from({ length: 4 }).map((_, i) => (
          <ProjectComp key={i} />
        ))}
      </div>
    </div>
  );
}

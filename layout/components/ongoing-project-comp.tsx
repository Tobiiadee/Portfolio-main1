/** @format */

import React from "react";
import MainProjectComp from "./main-project-comp";
import { Text } from "@/modules/common/components/text";
import { Separator } from "@/modules/common/ui/separator";

export default function OngoingProjectComp() {
  return (
    <div className='flex flex-col gap-8'>
      <div className='overflow-hidden'>
        <div className='flex gap-4 items-center justify-end w-full'>
          <Separator className='w-24 md:w-32' />
          <Text variant={"h4"} className='text-gray-500 font-semibold'>
            Ongoing Projects
          </Text>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-14 overflow-hidden place-items-center py-4 px-4'>
        {Array.from({ length: 5 }).map((_, i) => (
          <MainProjectComp key={i} index={i} />
        ))}
      </div>
    </div>
  );
}

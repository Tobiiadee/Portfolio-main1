/** @format */

"use client";

import React, { MouseEvent } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Text } from "@/modules/common/components/text";
import { useRouter } from "next/navigation";

type ProjectCompType = {
  projectTitle: string;
  description: string;
  projectId: string;
};

export default function ProjectComp({
  projectTitle,
  description,
  projectId,
}: ProjectCompType) {
  const { push } = useRouter();

  const handleNavigation =
    (projectId: string) => (event: MouseEvent<HTMLDivElement>) => {
      // Your click handling logic here
      event.preventDefault();
      push(`/projects/${projectId}`);
    };

  return (
    <div onClick={handleNavigation(projectId)}>
      <div className='group flex justify-between items-start border border-dashed rounded-md hover:scale-105 transition duration-300 w-full px-4 py-2 cursor-pointer overflow-hidden'>
        <div className='flex flex-col gap-1'>
          <Text variant={"h5"}>{projectTitle}</Text>
          <Text variant={"p"} className='text-gray-500'>
            {description}
          </Text>
        </div>
        <div>
          <ArrowRightIcon className='text-blue-500 w-4 h-4 group-hover:-rotate-45 transition duration-300' />
        </div>
      </div>
    </div>
  );
}

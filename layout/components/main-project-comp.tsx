/** @format */
"use client";

import React, { MouseEvent, useRef } from "react";
import { Text } from "@/modules/common/components/text";
import { motion } from "framer-motion";
import { ArrowRightIcon, OpenInNewWindowIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import imgD from "../../public/images/TPF.jpg";
import { useRouter } from "next/navigation";
import { Button } from "@/modules/common/ui/button";
import DeleteProjectAlert from "../../modules/common/components/project-alert";
import { useSession } from "next-auth/react";

type MainProjectCompType = {
  projectTitle: string;
  thumbnail: string;
  index: number;
  projectId: string;
};

export default function MainProjectComp({
  index,
  projectTitle,
  thumbnail,
  projectId,
}: MainProjectCompType) {
  const session = useSession();

  const { push } = useRouter();

  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleNavigation =
    (projectId: string) => (event: MouseEvent<HTMLDivElement>) => {
      // Your click handling logic here
      event.preventDefault();
      push(`/projects/${projectId}`);
    };

  const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (triggerRef.current) {
      triggerRef.current.click();
    }
  };

  return (
    <>
      <div className='relative'>
        <div onClick={handleNavigation(projectId)}>
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2 * (index! + 1) }}
            className='flex flex-col gap-4 w-max group px-2 py-1 relative'>
            <div className='relative flex items-center justify-center border border-dotted rounded-xl w-full h-[18rem] md:w-[20rem] md:h-[15rem] transition duration-300 cursor-pointer overflow-hidden'>
              <Image
                src={thumbnail || imgD}
                alt='project thumbnail'
                width={300}
                height={300}
                className='group-hover:scale-110 transition duration-300 rounded-md'
              />
              <div className='absolute group-hover:-rotate-45 transition duration-300 top-4 left-4 bg-foreground w-8 h-8 rounded-full flex items-center justify-center'>
                <ArrowRightIcon className='text-background w-5 h-5' />
              </div>
            </div>
            <div className='group-hover:text-foreground w-max text-gray-600 flex justify-between items-center transition duration-300 ml-2 md:ml-0'>
              <div className='flex gap-2 items-center'>
                <Text variant={"p"} className='text-start'>
                  {projectTitle || "Project title"}
                </Text>
                <OpenInNewWindowIcon />
              </div>
            </div>
          </motion.div>
        </div>
        {session.status === "authenticated" && (
          <div className='absolute right-0 bottom-0 z-40'>
            <Button variant={"ghost"} onClick={handleDelete} className=''>
              <TrashIcon />
            </Button>
          </div>
        )}
      </div>

      <DeleteProjectAlert
        title='Delete Project'
        description='Are you sure you want to delete this project?'
        triggerRef={triggerRef}
        projectId={projectId}
      />
    </>
  );
}

export const TrashIcon = () => {
  return (
    <div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='size-4'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
        />
      </svg>
    </div>
  );
};

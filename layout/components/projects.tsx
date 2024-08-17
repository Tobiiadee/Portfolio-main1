/** @format */

"use client";

import React, { useRef } from "react";
import ProjectComp from "./project-comp";
import { Text } from "@/modules/common/components/text";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { Button } from "@/modules/common/ui/button";
import Link from "next/link";
import useGetFirebaseData from "@/hooks/use-getFirebaseData";
import { getAllKeys } from "@/lib/helpers/helpers";
import { filterCompletedProjects } from "@/lib/helpers/helpers";
import { Skeleton } from "@/modules/common/ui/skeleton";
import EmptyData from "@/modules/common/components/empty-data";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Projects() {
  const { data, loading, error } = useGetFirebaseData("projects", 4);

  //Get all projects using their keys
  const projects = getAllKeys(data);

  //Filter for completed progets
  const completedProjects = filterCompletedProjects(projects);

  //Aniamtion Ref
  const ref = useRef<HTMLDivElement>(null);

  //Scroll Animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const opacityScroll = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const scaleScroll = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleScroll,
        opacity: opacityScroll,
      }}
      viewport={{ once: true }}
      className='grid grid-cols-2 gap-6'>
      <div className='self-start col-span-2 md:col-span-1 flex justify-between md:justify-normal md:flex-col gap-16 h-full'>
        <div className='flex items-start gap-6'>
          <DotFilledIcon className='w-4 h-4 hidden md:block' />
          <div className='flex flex-col gap-1 md:gap-1.5'>
            {" "}
            <Text variant={"h3"} className='font-normal'>
              Projects
            </Text>
            <Text variant={"p"} className='text-blue-500'>
              Completed Projects
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
        {loading === false && completedProjects.length === 0 && (
          <div>
            <EmptyData module='completed projects' className='h-52' />
          </div>
        )}
        {error && (
          <div className='flex items-center justify-center'>
            <Text variant={"h4"}>Unable to fetch completed projects</Text>
          </div>
        )}

        {loading && (
          <div className='flex flex-col gap-10 w-full'>
            {Array.from({ length: 3 }).map((_, i) => (
              <ProjectSekeletonCard key={i} />
            ))}
          </div>
        )}

        {completedProjects.map((project, i) => (
          <ProjectComp
            key={i}
            projectTitle={project.title}
            description={project.subTitle}
            projectId={project.id}
          />
        ))}
      </div>
    </motion.div>
  );
}

export const ProjectSekeletonCard = () => {
  return (
    <div className='space-y-2 flex flex-col w-full'>
      <Skeleton className='w-full h-20 rounded-md' />
      <Skeleton className='w-2/5 h-3 rounded-md' />
    </div>
  );
};

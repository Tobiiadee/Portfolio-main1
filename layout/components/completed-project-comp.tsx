/** @format */

"use client";

import React from "react";
import MainProjectComp from "./main-project-comp";
import { Text } from "@/modules/common/components/text";
import { Separator } from "@/modules/common/ui/separator";
import { AnimatePresence, motion } from "framer-motion";
import useGetFirebaseData from "@/hooks/use-getFirebaseData";
import { getAllKeys } from "@/lib/helpers/helpers";
import { filterCompletedProjects } from "@/lib/helpers/helpers";
import { SkeletonCard } from "@/modules/common/components/skeleton-card";
import EmptyData from "@/modules/common/components/empty-data";
import { useRouter } from "next/navigation";

export default function CompletedProjectComp() {
  const { data, loading, error } = useGetFirebaseData("projects", null);

  //Get all projects using their keys
  const projects = getAllKeys(data);

  const completedProjects = filterCompletedProjects(projects);

  const { push } = useRouter();

  return (
    <>
      {loading && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-7 lg:gap-14 overflow-hidden place-items-center py-4 px-4'>
          {loading && (
            <div className='md:col-span-2 lg:col-span-3 flex flex-col md:flex-row gap-10 w-full'>
              {Array.from({ length: 3 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          )}
        </div>
      )}
      {completedProjects.length! > 0 && (
        <div className='flex flex-col gap-8'>
          <div className='overflow-hidden'>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className='flex gap-4 items-center justify-end w-full'>
              <Separator className='w-24 md:w-32' />
              <Text variant={"h4"} className='text-gray-500 font-semibold'>
                Completed Projects
              </Text>
            </motion.div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-7 lg:gap-14 overflow-hidden place-items-center py-4 px-4'>
            {loading === false && completedProjects.length === 0 && (
              <div className='col-span-3'>
                <EmptyData module='completed projects' />
              </div>
            )}
            {error && (
              <div className='col-span-3 flex items-center justify-center'>
                <Text variant={"h4"}>Unable to fetch completed projects</Text>
              </div>
            )}

            <AnimatePresence>
              {completedProjects.map((project, i) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  key={project.id}
                  className='w-full'>
                  <MainProjectComp
                    key={project.id}
                    projectId={project.id}
                    index={i}
                    projectTitle={project.title}
                    thumbnail={project.thumbnailUrl}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
    </>
  );
}

/** @format */
"use client";

import React from "react";
import { Text } from "@/modules/common/components/text";
import { motion } from "framer-motion";
import useGetProject from "@/hooks/use-getProject";
import { useParams } from "next/navigation";
import EditProjectSkeleton from "@/modules/common/components/edit-project-skeleton";
import EditProjectComp from "@/layout/components/edit-project-comp";
import ErrorState from "@/modules/common/components/error-state";
import { Button } from "@/modules/common/ui/button";
import { useRouter } from "next/navigation";

export default function EditProject() {
  const { editProjectID } = useParams();

  const { data, loading, error } = useGetProject(editProjectID as string);
  const router = useRouter();
  // console.log(data);

  return (
    <div className='flex flex-col gap-14'>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='flex justify-between items-center'>
        <Text variant={"h1"} className='text-gray-500'>
          EDIT PROJECT
        </Text>

        <Button onClick={() => router.back()}  variant={"outline"}>
          Cancel
        </Button>
      </motion.div>

      {error && <ErrorState />}

      {loading && <EditProjectSkeleton />}

      {!!data && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}>
          <EditProjectComp
            data={data}
            thumbnail={data.thumbnailUrl}
            id={editProjectID as string}
          />
        </motion.div>
      )}
    </div>
  );
}

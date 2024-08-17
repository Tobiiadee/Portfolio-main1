/** @format */

"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import FeedbackDComp from "./feedbackD-comp";
import { Text } from "@/modules/common/components/text";
import useGetFirebaseData from "@/hooks/use-getFirebaseData";
import { getAllKeys } from "@/lib/helpers/helpers";
import EmptyData from "@/modules/common/components/empty-data";
import { ProjectSekeletonCard } from "./projects";

type FeedbackType = {
  message: string;
  email: string;
  id: string;
};

export default function FeedbacksDComp() {
  const { data, loading, error } = useGetFirebaseData("feedbacks", null);

  //Get all feedbacks using their keys
  const feedbacks = getAllKeys(data) as FeedbackType[];

  return (
    <div className='flex flex-col gap-8 overflow-hidden'>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <Text
          variant={"h1"}
          className='text-gray-500 uppercase flex items-center gap-2'>
          Feedbacks
        </Text>
      </motion.div>

      {loading === false && feedbacks.length === 0 && (
        <div>
          <EmptyData module='feedbacks' className='h-52' />
        </div>
      )}
      {error && (
        <div className='flex items-center justify-center'>
          <Text variant={"h4"}>Unable to fetch completed projects</Text>
        </div>
      )}

      {loading && (
        <div className='grid md:grid-cols-2 gap-6 w-full overflow-hidden'>
          {Array.from({ length: 6 }).map((_, i) => (
            <ProjectSekeletonCard key={i} />
          ))}
        </div>
      )}
      <div className='grid md:grid-cols-2 gap-6 overflow-hidden'>
        <AnimatePresence>
          {feedbacks.map((feedback, i) => (
            <motion.div
              key={feedback.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ duration: 0.5 }}>
              <FeedbackDComp
                key={feedback.id}
                id={feedback.id}
                feedback={feedback.message}
                email={feedback.email}
                index={i}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

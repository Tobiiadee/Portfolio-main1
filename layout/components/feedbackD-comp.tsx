/** @format */
"use client";
import { Text } from "@/modules/common/components/text";
import { Button } from "@/modules/common/ui/button";
import { motion } from "framer-motion";
import { TrashIcon } from "./main-project-comp";
import DeleteFeedbackAlert from "@/modules/common/components/feedback-alert";
import { MouseEvent, useRef } from "react";

interface FeedbackDCompProps {
  feedback: string;
  email: string;
  index: number;
  id: string;
}

export default function FeedbackDComp({
  index,
  email,
  feedback,
  id,
}: FeedbackDCompProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (triggerRef.current) {
      triggerRef.current.click();
    }
  };

  return (
    <>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2 * (index! + 1) }}
        className='flex flex-col space-y-2 h-full border border-dashed p-3 rounded-md relative'>
        <Text variant={"h4"} className='underline'>
          {email}
        </Text>
        <Text variant={"h5"}>{feedback}</Text>

        <div className='absolute right-0 bottom-0 z-40'>
          <Button variant={"ghost"} className='' onClick={handleDelete}>
            <TrashIcon />
          </Button>
        </div>
      </motion.div>

      <DeleteFeedbackAlert
        title='Delete Feedback'
        description='Are you sure you want to delete this feedback?'
        triggerRef={triggerRef}
        feedbackId={id}
      />
    </>
  );
}

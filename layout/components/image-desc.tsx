/** @format */

"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import useGetFirebaseData from "@/hooks/use-getFirebaseData";
import { getAllKeys } from "@/lib/helpers/helpers";
import LoadingSpinner from "@/modules/common/components/loading-spinner";
import { UserLink } from "@/modules/common/components/user-link";
import { Text } from "@/modules/common/components/text";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";

const ImageDesc = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data, loading, error } = useGetFirebaseData("projects", null);

  // Get all projects using their keys
  const projects = data ? getAllKeys(data) : [];

  // Extract thumbnail URLs
  const projectThumbnail = projects.map((project) => project.thumbnailUrl);

  useEffect(() => {
    if (projectThumbnail.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % projectThumbnail.length
        );
      }, 7000); // Change image every 7 seconds

      return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }
  }, [projectThumbnail]);

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className='relative self-center md:self-start w-full md:w-[21rem] h-[24rem] rounded-md flex items-center lg:items-start overflow-hidden'>
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className='w-full h-full overflow-hidden absolute top-0 left-0'>
          {loading && (
            <div className='w-full h-full flex items-center justify-center'>
              <LoadingSpinner size={50} />
            </div>
          )}
          {!loading && projectThumbnail.length > 0 && (
            <Image
              src={projectThumbnail[currentIndex]}
              alt='display image'
              fill={true}
              sizes='(max-width: 768px) 100vw, 33vw'
              className='object-cover'
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* <div className='bg-black/40 absolute top-0 left-0 w-full h-full z-20'></div> */}

      <div className='absolute top-3 right-4 pl-6 flex justify-end items-center w-full gap-1 z-20'>
        <div className='flex items-center gap-1.5'>
          <div className='w-2 h-2 rounded-full bg-blue-500'></div>
          <div className='w-2 h-2 rounded-full bg-white'></div>
        </div>
      </div>
    </motion.div>
  );
};

export default ImageDesc;

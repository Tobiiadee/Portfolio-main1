/** @format */

"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import img1 from "../../assets/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import img2 from "../../assets/jake-nackos-IF9TK5Uy-KI-unsplash.jpg";
import img3 from "../../assets/albert-dera-ILip77SbmOE-unsplash.jpg";
import img4 from "../../assets/charlesdeluvio-kVg2DQTAK7c-unsplash.jpg";
import { UserLink } from "@/modules/common/components/user-link";
import { Text } from "@/modules/common/components/text";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";

const imgArray = [img1, img2, img3, img4];

const ImageDesc = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgArray.length);
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className='relative self-center md:self-start w-[22rem] h-[24rem] shadow-md rounded-md flex items-center lg:items-start overflow-hidden'>
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className='w-full h-full overflow-hidden absolute top-0 left-0'>
          <Image
            src={imgArray[currentIndex]}
            alt='display image'
            fill={true}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className='bg-black/40 absolute top-0 left-0 w-full h-full z-20'></div>

      {/* <Image src={img2} alt='display image one' width={355} height={330} /> */}
      <div className='absolute top-3 right-4 pl-6 flex justify-end items-center w-full gap-1 z-20'>
        <div className='flex items-center gap-1.5'>
          <div className='w-2 h-2 rounded-full bg-blue-500'></div>
          <div className='w-2 h-2 rounded-full bg-white'></div>
        </div>
      </div>

      <div className='absolute left-8 bottom-5 border hover:border-blue-950 transition duration-300 rounded-xl w-5/6 h-11 px-4 py-1 flex items-center z-30'>
        <UserLink href={"/studio"}>
          <div className='flex gap-2 items-center w-full'>
            <Text variant={"h5"} className='text-blue-500'>
              Projects
            </Text>
            <OpenInNewWindowIcon className='text-blue-500' />
          </div>
        </UserLink>
      </div>
    </motion.div>
  );
};

export default ImageDesc;

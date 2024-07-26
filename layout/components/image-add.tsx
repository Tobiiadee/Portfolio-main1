/** @format */

import React from "react";
import Image from "next/image";
import { PlusIcon } from "@radix-ui/react-icons";

// const dummyImg: string = "/public/images/Dummy_flag.svg.png";

type AddImageType = {
  projectThumbnail: string | ArrayBuffer | null;
  imageUploadHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    imageKey: "image1" | "image2"
  ) => void;
  imageKey: "image1" | "image2";
};

export default function ImageAdd({
  projectThumbnail,
  imageUploadHandler,
  imageKey,
}: AddImageType) {

  const image = `${projectThumbnail}`

  // console.log(projectThumbnail);
  
  return (
    <div>
      <div>
        <label
          htmlFor='project thumbnail'
          className='relative transition duration-300 cursor-pointer'>
          {""}
          <div className='relative shadow w-[5rem] md:w-[12rem] aspect-square rounded-md overflow-hidden flex items-center justify-center'>
            <div className='absolute top-0 left-0 bg-black/10 w-full h-full  flex items-center justify-center'>
              <PlusIcon className='w-10 h-10 font-normal' />
            </div>
            {projectThumbnail && (
              <Image
                src={image}
                fill
                sizes='(max-width: 768px) 100vw, 33vw'
                className='object-cover'
                alt='Project thumbnail'
              />
            )}
          </div>
        </label>
        <input
          type='file'
          accept='image/*'
          onChange={(e) => imageUploadHandler(e, imageKey)}
          name='change photo'
          id='project thumbnail'
          className='hidden'
        />
      </div>
    </div>
  );
}

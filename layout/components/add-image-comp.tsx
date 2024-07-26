/** @format */

import React, { ChangeEvent } from "react";
import ImageAdd from "./image-add";

interface ImageCompType {
  imageUploadHandler: (
    e: ChangeEvent<HTMLInputElement>,
    imageKey: "image1" | "image2"
  ) => void;
  projectThumbnail: string | ArrayBuffer | null;
} 

export default function AddImageComp({
  imageUploadHandler,
  projectThumbnail,
}: ImageCompType) {
  return (
    <div className='flex gap-6'>
      <ImageAdd
        projectThumbnail={projectThumbnail}
        imageUploadHandler={imageUploadHandler}
        imageKey='image1'
      />
    </div>
  );
}

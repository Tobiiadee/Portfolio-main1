/** @format */

import React, { useState, ChangeEvent, useEffect } from "react";
import ImageAdd from "./image-add";

// const dummyImg: string = "/public/images/Dummy_flag.svg.png";

export default function AddImageComp() {
  //Project 1 thumbnail
  const [projectThumbnail, setProjectThumbnail] = useState<{
    image1: string;
    image2: string;
  }>({ image1: "", image2: "" });

  //Set Project 1 thumbnail
  const imageUploadHandler = (
    e: ChangeEvent<HTMLInputElement>,
    imageKey: "image1" | "image2"
  ) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const imageUrl = URL.createObjectURL(files[0]);

      setProjectThumbnail((prevUrls) => ({
        ...prevUrls,
        [imageKey]: imageUrl,
      }));
    }
  };

  useEffect(() => {
    // Cleanup URLs when the component unmounts or when URLs change
    return () => {
      if (projectThumbnail.image1) URL.revokeObjectURL(projectThumbnail.image1);
      if (projectThumbnail.image2) URL.revokeObjectURL(projectThumbnail.image2);
    };
  }, [projectThumbnail]);

  return (
    <div className='flex gap-6'>
      <ImageAdd
        projectThumbnail={projectThumbnail.image1}
        imageUploadHandler={imageUploadHandler}
        imageKey='image1'
      />
      <ImageAdd
        projectThumbnail={projectThumbnail.image2}
        imageUploadHandler={imageUploadHandler}
        imageKey='image2'
      />
    </div>
  );
}

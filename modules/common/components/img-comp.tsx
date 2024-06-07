/** @format */

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

interface ImageType {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
}

const imageConfig = cva("", {
  variants: {
    variant: {
      profileImg:
        "w-8 aspect-square rounded-full overflow-hidden grid place-items-center",
      fileImg: "w-20 aspect-square rounded-md shadow overflow-hidden",
    },
  },
});

export default function ImgComp({
  src,
  alt,
  height,
  width,
  className,
}: ImageType) {
  return (
    <div className={cn(imageConfig, className)}>
      <Image src={src} alt={alt} height={height} width={width} />
    </div>
  );
}

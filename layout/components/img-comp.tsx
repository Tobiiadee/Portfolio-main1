/** @format */

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

export interface ImgProps
  extends React.HTMLAttributes<HTMLImageElement>,
    VariantProps<typeof ImageVariants> {
  src: string;
  alt: string;
  height?: number;
  width?: number;
}

const ImageVariants = cva("", {
  variants: {
    variant: {
      profileImg:
        "w-8 aspect-square rounded-full overflow-hidden grid place-items-center",
      fileImg: "w-full aspect-square rounded-md shadow overflow-hidden",
    },
  },
});

const ImgComp = React.forwardRef<HTMLImageElement, ImgProps>(
  ({ src, alt, height, width, className, ...props }, ref) => {
    return (
      <div className={cn(ImageVariants, className)}>
        <Image src={src} alt={alt} height={height} width={width} {...props}/>
      </div>
    );
  }
);

ImgComp.displayName = "ImgComp";
export { ImgComp, ImageVariants };

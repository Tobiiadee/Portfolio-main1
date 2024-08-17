/** @format */

import { Text } from "@/modules/common/components/text";
import { DotFilledIcon } from "@radix-ui/react-icons";
import React from "react";
import {
  SVGJavaScript,
  SVGReact,
  SVGTypeScript,
  SVGNextJs,
  SVGUnkown,
  SVGCss,
} from "@/assets/sgv/svg";

export default function TechComp() {
  const techArray: React.ReactNode[] = [
    <SVGJavaScript key={null} />,
    <SVGReact key={null} />,
    <SVGTypeScript key={null} />,
    <SVGNextJs key={null} />,
    <SVGUnkown key={null} />,
    <SVGCss key={null} />,
  ];

  return (
    <div className='my-8 md:my-16 flex flex-col gap-10 items-center w-full'>
      <div className='flex items-center gap-4'>
        <DotFilledIcon className='w-5 h-5' />
        <Text variant={"h3"}>Technologies</Text>
        <DotFilledIcon className='w-5 h-5' />
      </div>

      <div className='grid grid-cols-2 place-items-center md:flex gap-4 md:gap-8 items-center justify-center w-full'>
        {techArray.map((svg, i) => svg)}
      </div>
    </div>
  );
}

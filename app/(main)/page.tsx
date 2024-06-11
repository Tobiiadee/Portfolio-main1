/** @format */

import React from "react";
import TitleDescription from "@/layout/components/title_description";
import ImageDesc from "@/layout/components/image-desc";
import { Separator } from "@/modules/common/ui/separator";
import Projects from "@/layout/components/projects";
import { Text } from "@/modules/common/components/text";
import FeedBackComp from "@/layout/components/feedback-comp";
import TechComp from "@/layout/components/tech-comp";

export default function Page() {
  return (
    <div className='grid gap-16 md:gap-0 mt-10'>
      <div className='flex flex-col gap-14 lg:flex-row lg:h-screen lg:justify-between overflow-hidden'>
        <TitleDescription />
        <div className='border border-dotted lg:hidden'></div>
        <ImageDesc />
      </div>
      <Separator className='hidden h-[1px] w-full lg:block -mt-36' />
      <Projects />
      <Text variant={"h4"} className='md:mt-28'>
        Our goal is to infuse innovation and creativity into every project we
        handle. By collaborating closely with our clients, our team of experts
        ensures a deep understanding of their needs, delivering exceptional
        solutions. We are committed to crafting products that surpass our
        clients&rsquo; expectations.
      </Text>
      <TechComp />
      <div className='mt-14 w-full md:w-4/6'>
        <FeedBackComp />
      </div>
    </div>
  );
}

/** @format */

"use client";

import React from "react";
import TitleDescription from "@/layout/components/title_description";
import ImageDesc from "@/layout/components/image-desc";
import { Separator } from "@/modules/common/ui/separator";
import Projects from "@/layout/components/projects";
import { Text } from "@/modules/common/components/text";
import FeedBackComp from "@/layout/components/feedback-comp";
import TechComp from "@/layout/components/tech-comp";
import { TestimonialButton } from "@/layout/components/about-comp";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className='relative grid gap-16 md:gap-0 md:mt-10'>
      <div className='flex flex-col gap-14 lg:flex-row lg:h-screen 2xl:h-[70vh] lg:justify-between overflow-hidden'>
        <TitleDescription />
        <div className='border border-dotted lg:hidden'></div>
        <ImageDesc />
      </div>
      <Separator className='hidden h-[1px] w-full lg:block -mt-36' />
      <Projects />
      <div className='h-[10rem] py-[4rem] md:mt-28 overflow-hidden'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: -50, opacity: 1 }}
          transition={{ duration: 1.3 }}
          viewport={{ once: true }}>
          <Text variant={"h4"}>
            Our goal is to infuse innovation and creativity into every project
            we handle. By collaborating closely with our clients, our team of
            experts ensures a deep understanding of their needs, delivering
            exceptional solutions. We are committed to crafting products that
            surpass our clients&rsquo; expectations.
          </Text>
        </motion.div>
      </div>

      <TechComp />
      <div id='feedback' className='mt-14 w-full md:w-4/6'>
        <FeedBackComp />
      </div>

      {/* <div className='fixed right-6 bottom-8 hidden md:block'>
        <TestimonialButton className='py-6' />
      </div> */}
    </div>
  );
}

/** @format */

"use client";

import React from "react";
import { Text } from "@/modules/common/components/text";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className='flex flex-col gap-14 overflow-hidden'>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <Text variant={"h1"} className='text-gray-500'>
          ABOUT ME
        </Text>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className='flex flex-col gap-14'>
        <div className='flex flex-col gap-4'>
          <Text variant={"h4"}>Hi, I&rsquo;m OLUWATOBI ADEKUNLE.</Text>

          <Text variant={"h4"}>
            Welcome to my portfolio! I am a passionate and dedicated frontend
            web developer with a strong focus on creating engaging and dynamic
            user experiences. My journey in web development has equipped me with
            a diverse set of skills and a keen eye for detail, allowing me to
            build modern, responsive, and visually appealing websites.
          </Text>
        </div>

        <div className='border border-dotted'></div>

        <div className='flex flex-col gap-4 md:grid grid-cols-2 md:gap-6'>
          <Text variant={"h4"} className='uppercase'>
            Specialization
          </Text>
          <div className='flex flex-col gap-6'>
            <Text variant={"h5"}>
              As a frontend developer, I specialize in bringing designs to life
              with clean, efficient, and maintainable code. My expertise lies in
              leveraging the latest technologies to ensure that every project I
              work on meets the highest standards of performance and usability.
            </Text>
          </div>
        </div>

        <div className='flex flex-col gap-4 md:grid grid-cols-2 md:gap-6'>
          <Text variant={"h4"} className='uppercase'>
            Tech Stark
          </Text>
          <div className='flex flex-col gap-4'>
            <Text variant={"h5"}>
              I am proficient in a wide range of tools and technologies that
              enable me to deliver top-notch web applications:
            </Text>
            <div className='flex flex-col pl-10 gap-4'>
              <div className='flex flex-col gap-4'>
                <BulletText>JavaScript</BulletText>
                <BulletText>React</BulletText>
                <BulletText>Next JS</BulletText>
              </div>

              <div className='flex flex-col gap-4'>
                <BulletText>Vanilla CSS</BulletText>
                <BulletText>Tailwind CSS</BulletText>
                <BulletText>BootStrap</BulletText>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4 md:grid grid-cols-2 md:gap-6'>
          <Text variant={"h4"} className='uppercase'>
            APPROACH
          </Text>
          <Text variant={"h5"}>
            I believe in a user-centered approach to web development.
            Understanding the needs and goals of users is paramount, and I
            strive to create interfaces that are intuitive and enjoyable to use.
            Whether I&rsquo;m working on a simple landing page or a complex web
            application, my goal is to deliver a seamless and engaging
            experience for all users.
          </Text>
        </div>

        <div className='flex flex-col gap-4 md:mt-6'>
          <Text variant={"h4"} className='uppercase'>
            LET&rsquo;S CONNECT
          </Text>

          <Text variant={"h5"}>
            I am always excited to collaborate on new projects and challenges.
            If you&rsquo;re interested in working together or have any questions
            about my work, please feel free to reach out. Thank you for visiting
            my portfolio, and I look forward to connecting with you!
          </Text>
        </div>
      </motion.div>
    </div>
  );
}

export const BulletText = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex gap-4 items-center'>
      <DotFilledIcon />
      <Text variant={"h5"}>{children}</Text>
    </div>
  );
};

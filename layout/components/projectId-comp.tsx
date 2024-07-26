/** @format */

"use client";

import React from "react";
import { Text } from "@/modules/common/components/text";
import Image from "next/image";
import { Button } from "@/modules/common/ui/button";
import Link from "next/link";
import { formatDate } from "@/lib/helpers/helpers";

export interface Project {
  title: string;
  subTitle: string;
  url: string;
  description: string;
  thumbnailUrl: string;
  industry: string;
  stage?: string;
  services: string[];
  client: string;
  date: string;
  id?: string;
}

export default function ProjectIdComp({
  title,
  subTitle,
  url,
  description,
  thumbnailUrl,
  industry,
  services,
  client,
  date,
}: Project) {
  return (
    <div className='flex flex-col gap-20'>
      <div className='flex justify-between w-full'>
        <div className='flex flex-col gap-6'>
          <Text variant={"h2"}>{title}</Text>
          <Text variant={"h3"}>{subTitle}</Text>
        </div>

        <div>
          <Link href={url} target='blank'>
            <Button variant={"outline"}>
              <Text variant={"p"}>View Live</Text>
            </Button>
          </Link>
        </div>
      </div>

      <Text variant={"h4"}>{description}</Text>
      <ProjectServicesMain
        services={services!}
        date={date!}
        industry={industry!}
        client={client!}
      />
      <ProjectServicesMobile
        services={services!}
        date={date!}
        industry={industry!}
        client={client!}
      />
      <div className='relative group flex items-center justify-center w-full h-[25rem] md:h-[30rem] bg-gray-500 rounded-xl overflow-hidden'>
        <div className='relative  group-hover:scale-105 transition duration-300 rounded-xl lex items-center justify-center overflow-hidden'>
          <Image
            src={thumbnailUrl!}
            alt='project thumbnail'
            width={500}
            height={100}
          />
        </div>
      </div>

      <Text variant={"h4"} className="mt-16">
        Dive into a curated collection of projects that exemplify creativity,
        craftsmanship, and innovation. From web applications to multimedia
        endeavors, each project showcases our dedication to quality and
        innovation. Explore how we bring ideas to life and discover the impact
        of our work through our dynamic portfolio.
      </Text>

      <div className='relative flex items-center justify-center w-full h-[25rem] md:h-[30rem] bg-gray-500 rounded-xl overflow-hidden'></div>
    </div>
  );
}

const ProjectServicesMain = ({
  services,
  client,
  industry,
  date,
}: {
  services: string[];
  client: string;
  industry: string;
  date: string;
}) => {
  let eachService;

  if (services.length === 0) {
    eachService = "null";
  } else {
    eachService = services.map((service) => (
      <Text key={service} variant={"h5"}>
        {service}
      </Text>
    ));
  }

  return (
    <div className='md:flex flex-col gap-1 hidden'>
      <div className='grid grid-cols-4'>
        <Text variant={"h5"}>Client</Text>
        <Text variant={"h5"}>Services</Text>
        <Text variant={"h5"}>Industry</Text>
        <Text variant={"h5"}>Date</Text>
      </div>
      <div className='grid grid-cols-4 text-gray-500'>
        <Text variant={"h5"}>{client}</Text>
        <div className='flex flex-col gap-1'>{eachService}</div>
        <Text variant={"h5"}>{industry}</Text>
        <Text variant={"h5"}>{formatDate(date)}</Text>
      </div>
    </div>
  );
};
const ProjectServicesMobile = ({
  services,
  client,
  industry,
  date,
}: {
  services: string[];
  client: string;
  industry: string;
  date: string;
}) => {
  let eachService;

  if (services.length === 0) {
    eachService = "null";
  } else {
    eachService = services.map((service) => (
      <Text key={service} variant={"h5"}>
        {service}
      </Text>
    ));
  }
  return (
    <div className='flex flex-col gap-4  md:hidden'>
      <div className='space-y-1'>
        <div className='grid grid-cols-2'>
          <Text variant={"h5"}>Client</Text>
          <Text variant={"h5"}>Services</Text>
        </div>
        <div className='grid grid-cols-2 text-gray-500'>
          <Text variant={"h5"}>{client}</Text>
          <div className='flex flex-col gap-1'>{eachService}</div>
        </div>
      </div>

      <div className='space-y-1'>
        <div className='grid grid-cols-2'>
          <Text variant={"h5"}>Industry</Text>
          <Text variant={"h5"}>Date</Text>
        </div>

        <div className='grid grid-cols-2 text-gray-500'>
          <Text variant={"h5"}>{industry}</Text>
          <Text variant={"h5"}>{formatDate(date)}</Text>
        </div>
      </div>
    </div>
  );
};

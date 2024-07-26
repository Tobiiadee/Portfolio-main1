/** @format */

import React from "react";
import { Text } from "@/modules/common/components/text";
import { Button } from "@/modules/common/ui/button";
import Link from "next/link";
import { SocialContact } from "../components/contact-comp";

export default function Footer() {
  return (
    <div className='container md:px-24 pb-10 grid gap-14 md:flex justify-between mt-20'>
      <div className='w-full'>
        <Text variant={"h4"}>
          We excel in creating outstanding digital experiences designed to help
          our clients reach their business objectives.
        </Text>

        <div className='mt-10'>
          {" "}
          <Link href={"/contact"}>
            <Button>Get In Touch</Button>
          </Link>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-8 justify-between w-full'>
        <FooterLinks />
        <SocialContact />
      </div>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className='flex flex-col gap-2 w-max'>
      <Link href='/projects' className="relative link-hover">
        <Text variant={"h5"}>Work</Text>
      </Link>
      <Link href='/about' className="relative link-hover">
        <Text variant={"h5"}>About</Text>
      </Link>
      <Link href='/contact' className="relative link-hover">
        <Text variant={"h5"}>Contact</Text>
      </Link>
      <Link href='/blog' target='blank' className="relative link-hover">
        <Text variant={"h5"}>Blog</Text>
      </Link>
    </div>
  );
}

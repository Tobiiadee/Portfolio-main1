/** @format */

import React from "react";
import { Text } from "@/modules/common/components/text";
import { Button } from "@/modules/common/ui/button";
import Link from "next/link";
import FooterComp from "../components/footer-comp";
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

      <div className='self-center w-full'>
        <SocialContact />
      </div>
    </div>
  );
}

/** @format */

import React from "react";
import { Text } from "@/modules/common/components/text";
import { UserLink } from "@/modules/common/components/user-link";
import { Button } from "@/modules/common/ui/button";
import FooterComp from "../components/footer-comp";

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
          <UserLink href={"/contact"}>
            <Button>Get In Touch</Button>
          </UserLink>
        </div>
      </div>

      <div className='w-full'>
        <FooterComp />
      </div>
    </div>
  );
}

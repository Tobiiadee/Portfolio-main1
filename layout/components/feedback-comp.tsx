/** @format */

import React from "react";
import { FeedBackForm } from "./feedback-form";
import { Text } from "@/modules/common/components/text";

export default function FeedBackComp() {
  return (
    <div className='grid gap-8' id='feedback'>
      <div className='flex flex-col gap-4'>
        <Text variant={"h3"}>We Value Your Feedback!</Text>
        <Text variant={"h5"}>
          Thank you for visiting this portfolio! Your insights and feedback are
          incredibly valuable to us as we strive to improve and grow as
          professionals. By sharing your thoughts, you help us understand what
          we sare doing well and where we can make improvements. Whether
          it&rsquo;s about the design, content, functionality, or any other
          aspect of our work, we would love to hear your opinions.
        </Text>
        <Text variant={"h5"}>
          Please take a moment to drop your feedback below. Your input will not
          only help us enhance this portfolio but also guide us in our ongoing
          projects and future endeavors. Together, we can create a better
          experience for everyone.
        </Text>
        <Text variant={"h5"}>
          Thank you for your time and for helping us on this journey!
        </Text>
      </div>
      <FeedBackForm />
    </div>
  );
}

/** @format */

import { Text } from "@/modules/common/components/text";
import React from "react";

const TitleDescription = () => {
  return (
    <div className="flex flex-col gap-8 lg:gap-10 lg:w-[40rem] mt-20">
      <Text variant={"h4"}>
        We specialize in crafting exceptional digital experiences to help our
        clients achieve their business goals.
      </Text>
      <Text className="leading-20" variant={"h1"}>Product Design Experience</Text>
    </div>
  );
};

export default TitleDescription;

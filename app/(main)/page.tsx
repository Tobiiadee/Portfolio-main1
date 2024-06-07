/** @format */

import React from "react";
import TitleDescription from "@/layout/components/title_description";
import ImageDesc from "@/layout/components/image-desc";

export default function Page() {
  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row  lg:justify-between">
        <TitleDescription />
        <ImageDesc />
      </div>
    </div>
  );
}

/** @format */

import LoadingSvg from "@/modules/common/components/loading-svg";
import React from "react";

export default function Loading() {
  return (
    <div className='w-dvw h-dvh grid place-items-center bg-background'>
      <LoadingSvg />
    </div>
  );
}

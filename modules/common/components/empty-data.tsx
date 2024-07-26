/** @format */

import React from "react";
import { Text } from "./text";

export default function EmptyData({
  module,
  className,
}: {
  module: string;
  className?: string;
}) {
  return (
    <div className={`w-full flex items-center justify-center ${className}`}>
      <Text variant={"h4"}>Sorry, there are no {module}</Text>
    </div>
  );
}

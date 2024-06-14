/** @format */

"use client";

import React from "react";
import { Text } from "@/modules/common/components/text";
import { Button } from "@/modules/common/ui/button";
import Link from "next/link";

export default function Error() {
  return (
    <div className='w-dvw h-dvh flex items-center justify-center'>
      <Text variant={"h4"}>Sorry, an error occured</Text>
      <Link href={"/"}>
        <Button>Return To Homepage</Button>
      </Link>
    </div>
  );
}

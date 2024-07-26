/** @format */
"use client";

import React from "react";
import { Text } from "../components/text";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function EmptyState({ module }: { module?: string }) {
  const { push } = useRouter();

  return (
    <div className='w-full h-dvh flex items-center justify-center'>
      <div className='-mt-[10rem] md:-mt-52 flex flex-col gap-4 items-center'>
        <Text variant={"h2"} className="text-center">Sorry, {module || "this"} page is still under construction!</Text>
        <Button onClick={() => push("/")}>Return To Homepage</Button>
      </div>
    </div>
  );
}

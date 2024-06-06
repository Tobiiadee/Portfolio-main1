/** @format */

"use client";

import React, { Children } from "react";
import { SheetClose } from "@/modules/common/ui/sheet";
import { useRouter } from "next/navigation";
import { Share2Icon } from "@radix-ui/react-icons";

export default function SideMenuItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const { push } = useRouter();
  return <SheetClose onClick={() => push(href)}>{children}</SheetClose>;
}

export function CloseSideMenu() {
  return (
    <SheetClose className='rounded-sm ring-offset-background transition duration-300 active:rotate-45 focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary'>
      <Share2Icon className='h-6 w-6' />
      <span className='sr-only'>Close</span>
    </SheetClose>
  );
}

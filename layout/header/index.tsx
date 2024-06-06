/** @format */

import React from "react";
import { UserLink } from "@/modules/common/components/user-link";
import { Text } from "@/modules/common/components/text";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header className='fixed top-0 left-0 shadow w-full bg-transparent grid place-items-center h-16'>
      <div className='container mx-auto flex justify-between items-center'>
        <UserLink href={"/"}>
          <Text variant={"h4"}>tobiade.dev</Text>
        </UserLink>
        <div className='flex justify-between space-x-20 items-center'>
          <Navigation />
        </div>
      </div>
    </header>
  );
}

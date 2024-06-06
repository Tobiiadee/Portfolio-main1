/** @format */

import React from "react";
import { UserLink } from "./user-link";
import { Text } from "./text";
import { Separator } from "@/modules/common/ui/separator";
import ToggleTheme from "@/layout/components/toggleTheme";

export default function MainMenu() {
  return (
    <div className='hidden lg:flex gap-10 items-center'>
      <div className="flex gap-6 items-center">
        <div className='flex items-center gap-6'>
          <UserLink href={"/work"}>
            <Text variant={"h5"}>Work</Text>
          </UserLink>
          <Separator orientation='vertical' className='h-6' />
        </div>
        <div className='flex items-center gap-6'>
          <UserLink href={"/studio"}>
            <Text variant={"h5"}>Studio</Text>
          </UserLink>
          <Separator orientation='vertical' className='h-6' />
        </div>
        <div className='flex items-center gap-6'>
          <UserLink href={"/contact"}>
            <Text variant={"h5"}>Contact</Text>
          </UserLink>
        </div>
      </div>

      <div className='space-x-10'>
        <ToggleTheme />
      </div>
    </div>
  );
}

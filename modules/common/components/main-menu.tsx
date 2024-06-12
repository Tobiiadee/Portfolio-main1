/** @format */

import React from "react";
import { UserLink } from "./user-link";
import { Text } from "./text";
import { Separator } from "@/modules/common/ui/separator";
import ToggleTheme from "@/layout/components/toggleTheme";
import AdminAccess from "@/modules/common/components/admin-access";

export default function MainMenu() {
  return (
    <div className='hidden lg:flex gap-10 items-center'>
      <div className='flex gap-8 items-center'>
        <UserLink href={"/projects"}>
          <Text variant={"h5"}>Work</Text>
        </UserLink>

        <UserLink href={"/about"}>
          <Text variant={"h5"}>About</Text>
        </UserLink>

        <UserLink href={"/contact"}>
          <Text variant={"h5"}>Contact</Text>
        </UserLink>

        <AdminAccess />
      </div>

      <div className='space-x-10'>
        <ToggleTheme />
      </div>
    </div>
  );
}

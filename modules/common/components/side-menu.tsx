/** @format */

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/modules/common/ui/sheet";
import SideMenuItem, { CloseSideMenu } from "./side-menu-item";
import { Text } from "./text";
import ToggleTheme from "@/layout/components/toggleTheme";
import AdminAccess from "./admin-access";

export default function SideMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent
        side='top'
        className='w-full h-max rounded-b-md py-6 px-4 flex flex-col'>
        <div className='w-full flex justify-between items-center'>
          <ToggleTheme />
          <CloseSideMenu />
        </div>
        <div className='flex flex-col items-center gap-6'>
          <SideMenuItem href='/work'>
            <Text variant={"h5"}>Work</Text>
          </SideMenuItem>
          <SideMenuItem href='/studio'>
            <Text variant={"h5"}>Studio</Text>
          </SideMenuItem>
          <SideMenuItem href='/contact'>
            <Text variant={"h5"}>Contact</Text>
          </SideMenuItem>
          <AdminAccess />
        </div>
      </SheetContent>
    </Sheet>
  );
}

const MenuIcon = () => {
  return (
    <div className='border border-gray-600/50 active:border-white/50 p-1 rounded-md transition duration-300'>
      <svg
        width='25'
        height='25'
        viewBox='0 0 15 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H2.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z'
          fill='currentColor'
          fillRule='evenodd'
          clipRule='evenodd'></path>
      </svg>
    </div>
  );
};

/** @format */

import React from "react";
import MainMenu from "@/modules/common/components/main-menu";
import SideMenu from "@/modules/common/components/side-menu";

export default function Navigation() {
  return (
    <nav>
      <MainMenu />
      <div className='lg:hidden'>
        <SideMenu />
      </div>
    </nav>
  );
}

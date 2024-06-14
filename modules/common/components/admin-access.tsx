/** @format */

"use client";

import React, { useState, useRef } from "react";
// import ImgComp from "@/modules/common/components/img-comp";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/modules/common/ui/menubar";
import { PlusIcon, ReaderIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import profileImg from "../../../public/images/TPF.jpg";
import OnAlert from "./on-alert";
import { UserLink } from "./user-link";
import { useRouter } from "next/navigation";

const AdminAccess = () => {
  const [admin, setAdmin] = useState(true);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const resetAdmin = () => {
    if (triggerRef.current) {
      triggerRef.current.click();
    }
  };

  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className='px-8 rounded-md bg-white text-black lg:px-4 transition duration-300'>
            {admin ? "Admin" : "Client"}
          </MenubarTrigger>
          {admin ? (
            <AdminMenu admin={admin} signOut={resetAdmin} />
          ) : (
            <NoAccess />
          )}
        </MenubarMenu>
      </Menubar>

      <OnAlert
        title='Are you sure you want to sign out?'
        triggerRef={triggerRef}
        setState={setAdmin}
      />
    </>
  );
};

export default AdminAccess;

const AdminMenu = ({
  admin,
  signOut,
}: {
  admin: boolean;
  signOut?: () => void;
}) => {
  const { push } = useRouter();

  return (
    <MenubarContent className='mt-1'>
      <MenubarItem onClick={() => push("/profile")}>
        {admin ? "Profile" : "Sign-in"}{" "}
        <MenubarShortcut>
          <AdminImage />
        </MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem onClick={() => push("/profile/add-project")}>
        Add Project
        <MenubarShortcut>
          <PlusIcon />
        </MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Edit Contact</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem onClick={signOut}>Sign-out</MenubarItem>
    </MenubarContent>
  );
};

const NoAccess = () => {
  const { push } = useRouter();

  return (
    <MenubarContent className='mt-1'>
      <MenubarItem onClick={() => push("/sign-in")}>Sign-in</MenubarItem>
      <MenubarSeparator />
      <MenubarItem onClick={() => push("/blog")}>Checkout our Blog</MenubarItem>
      <MenubarSeparator />
      <MenubarItem onClick={() => push("/#feedback")}>
        Drop a feedback
        <MenubarShortcut>
          <ReaderIcon />
        </MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem onClick={() => push("/help")}>Help</MenubarItem>
    </MenubarContent>
  );
};

export const AdminImage = () => {
  return (
    <div className='w-8 h-8 rounded-full overflow-hidden flex items-center justify-center'>
      <Image
        src={profileImg}
        alt='admin profile image'
        width={25}
        height={25}
      />
    </div>
  );
};

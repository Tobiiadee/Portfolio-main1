/** @format */

"use client";

import React, { useState, useRef, useEffect } from "react";
import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/modules/common/ui/menubar";
import {
  FaceIcon,
  PersonIcon,
  PlusIcon,
  ReaderIcon,
  Share1Icon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import profileImg from "../../../public/images/DUMMY_Profile-Image.png";
import OnAlert from "./on-alert";
import { useRouter } from "next/navigation";
import ShareContent from "@/lib/helpers/share-content";
import type { Session } from "next-auth";
import { Text } from "./text";

export interface AuthSessionType {
  session: Session | null;
}

const AdminAccess = () => {
  const [session, setSession] = useState<Session | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    async function fetchSession() {
      const authSession = await getSession();
      setSession(authSession);
    }
    fetchSession();
  }, []);

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
            {!session ? "Menu" : "Admin"}
          </MenubarTrigger>
          {!session ? <NoAccess /> : <AdminMenu signOut={resetAdmin} />}
        </MenubarMenu>
      </Menubar>

      <OnAlert
        title='Are you sure you want to sign out?'
        triggerRef={triggerRef}
      />
    </>
  );
};

export default AdminAccess;

const AdminMenu = ({ signOut }: { signOut: () => void }) => {
  const { push } = useRouter();
  const session = useSession();

  const userEmail = session.data?.user?.email;

  return (
    <MenubarContent className='mt-1'>
      <MenubarItem className='flex flex-col items-center gap-4'>
        <AdminImage />
        <Text variant={"p"}>{userEmail}</Text>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem
        onClick={() => push("/add-project")}
        className='cursor-pointer'>
        Add Project
        <MenubarShortcut>
          <PlusIcon />
        </MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem
        onClick={() => push("/contact-request")}
        className='cursor-pointer'>
        Contact Request
        <MenubarShortcut>
          <PersonIcon />
        </MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem onClick={() => push("/feedback")} className='cursor-pointer'>
        Feedbacks
        <MenubarShortcut>
          <FaceIcon />
        </MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem onClick={() => signOut()} className='cursor-pointer'>
        Sign-out
      </MenubarItem>
    </MenubarContent>
  );
};

const NoAccess = () => {
  const { push } = useRouter();

  return (
    <MenubarContent className='mt-1'>
      <MenubarItem onClick={() => push("/sign-in")} className='cursor-pointer'>
        Sign-in
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem onClick={() => push("/blog")} className='cursor-pointer'>
        Checkout our Blog
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem
        onClick={() => push("/#feedback")}
        className='cursor-pointer'>
        Drop a feedback
        <MenubarShortcut>
          <ReaderIcon />
        </MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem
        onClick={() => ShareContent("portfolio-content")}
        className='cursor-pointer'>
        Share
        <MenubarShortcut>
          <Share1Icon />
        </MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem onClick={() => push("/help")} className='cursor-pointer'>
        Help
      </MenubarItem>
    </MenubarContent>
  );
};

export const AdminImage = () => {
  const session = useSession();

  const userImage = session.data?.user?.image;

  return (
    <div className='self-center w-20 h-20 rounded-full flex items-center justify-center overflow-hidden'>
      <Image
        src={userImage || profileImg}
        alt='admin profile image'
        width={80}
        height={80}
      />
    </div>
  );
};

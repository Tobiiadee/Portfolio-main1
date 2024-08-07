/** @format */

import React, { ReactElement } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/modules/common/ui/alert-dialog";

import { signOut } from "next-auth/react";

export default function OnAlert({
  title,
  description,
  triggerRef,
}: {
  title: string;
  description?: string;
  triggerRef?: React.RefObject<HTMLButtonElement>;
}) {
  const stateHandler = () => {
    signOut();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger ref={triggerRef} className='hidden'>
        Open
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className='font-normal'>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>No</AlertDialogCancel>
          <AlertDialogAction onClick={stateHandler}>Yes</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

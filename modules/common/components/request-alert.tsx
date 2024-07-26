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
} from "../ui/alert-dialog";

import { deleteContactRequest } from "@/lib/helpers/helpers";

export default function DeleteRequestAlert({
  title,
  description,
  triggerRef,
  contactId,
}: {
  title: string;
  description?: string;
  triggerRef?: React.RefObject<HTMLButtonElement>;
  contactId: string;
}) {
  const stateHandler = () => {
    deleteContactRequest(contactId);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger ref={triggerRef} className='hidden'>
        Open
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className='font-normal capitalize'>
            {title}
          </AlertDialogTitle>
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

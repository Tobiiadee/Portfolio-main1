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

export default function OnAlert({
  title,
  description,
  triggerRef,
  setState
}: {
  title: string;
  description?: string;
  triggerRef?: React.RefObject<HTMLButtonElement>,
  setState: (state: boolean) => void
}) {

    const stateHandler = () => setState(false);

  return (
    <AlertDialog>
      <AlertDialogTrigger ref={triggerRef} className="hidden">Open</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={stateHandler}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

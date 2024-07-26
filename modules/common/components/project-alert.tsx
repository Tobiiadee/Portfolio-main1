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

import { DeleteProject } from "../../../lib/helpers/delete-project";

export default function DeleteProjectAlert({
  title,
  description,
  triggerRef,
  projectId,
}: {
  title: string;
  description?: string;
  triggerRef?: React.RefObject<HTMLButtonElement>;
  projectId: string;
}) {
  const stateHandler = () => {
    DeleteProject(projectId);
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

{/* <p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam adipisci sit
  reiciendis, voluptatem animi dolorem accusantium blanditiis magnam dolor ipsum
  officiis. Officia at omnis voluptates temporibus esse nemo tempore accusamus
  ullam aliquid, maxime iure doloribus cupiditate qui optio numquam illum eaque
  dolores voluptatibus quasi vero autem sint quibusdam maiores cum!
</p>; */}

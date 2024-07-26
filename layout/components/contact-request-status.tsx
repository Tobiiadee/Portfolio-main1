/** @format */

"use client";

import * as React from "react";

import { Button } from "@/modules/common/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/modules/common/ui/dropdown-menu";
import { updateRequestStatus } from "@/lib/helpers/helpers";

export function ContactRequestStatus({
  CStatus,
  contactId,
}: {
  CStatus: string;
  contactId: string;
}) {
  const [status, setStatus] = React.useState(CStatus);

  React.useEffect(() => {
    const updatedStatus = {
      status: status,
    };
    updateRequestStatus(contactId, updatedStatus);
  }, [contactId, status]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>Status</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-[10rem]'>
        <DropdownMenuLabel>Request Status</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={status} onValueChange={setStatus}>
          <DropdownMenuRadioItem value='pending'>Pending</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='ongoing'>Ongoing</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='delivered'>
            Delivered
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='cancelled'>
            Cancelled
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

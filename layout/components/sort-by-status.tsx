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
import { ChevronDown } from "lucide-react";
import { Text } from "@/modules/common/components/text";
import { StatusType } from "./contact-request-comp";

export function SortByStatus({
  sortingStatus,
}: {
  sortingStatus: (status: string) => void;
}) {
  const [status, setStatus] = React.useState("");

  sortingStatus(status);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='w-[12rem]'>
        <Button variant='outline' className='flex items-center justify-between'>
          <Text>Search by status</Text>
          <ChevronDown className='w-5 h-5' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-[12rem]'>
        <DropdownMenuLabel>Status</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={status} onValueChange={setStatus}>
          <DropdownMenuRadioItem value=''>No Status</DropdownMenuRadioItem>
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

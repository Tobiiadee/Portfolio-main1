/** @format */

"use client"

import React, { forwardRef } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

type UserLinkProps = LinkProps & {
  children: React.ReactNode;
  className?: string;
};

const activeClass = cva("link-hover relative", {
  variants: {
    variant: {
      isActive: "link-hover relative",
    },
  },
});

export const UserLink = forwardRef<HTMLAnchorElement, UserLinkProps>(
  (props, ref) => {
    const pathname = usePathname();
    const isActive = props.href === pathname;

    return (
      <Link
        ref={ref}
        {...props}
        className={`link-hover ${isActive ? "link-active" : ""} relative`}
      />
    );
  }
);

UserLink.displayName = "UserLink";

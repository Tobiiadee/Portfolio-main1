/** @format */

import React, { forwardRef } from "react";
import Link, { LinkProps } from "next/link";

type UserLinkProps = LinkProps & {
  children: React.ReactNode;
  className?: string;
};

export const UserLink = forwardRef<HTMLAnchorElement, UserLinkProps>(
  (props, ref) => {
    return <Link ref={ref} {...props} />;
  }
);

UserLink.displayName = "UserLink";

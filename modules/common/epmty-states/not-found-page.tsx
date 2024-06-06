/** @format */

import React from "react";
import { UserLink } from "../components/user-link";
import { Text } from "../components/text";
import { Button } from "@/modules/common/ui/button";

export default function NotFoundPage({
  module,
  children,
}: {
  module?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div>
        <Text>{`Sorry, this ${module ? module : "page"} does not exist!`}</Text>
      </div>
      {children ? (
        children
      ) : (
        <UserLink href={"/"}>
          <Button>Return Home</Button>
        </UserLink>
      )}
    </div>
  );
}

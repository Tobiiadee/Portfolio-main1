/** @format */

import { Text } from "./text";
import { DotFilledIcon } from "@radix-ui/react-icons";

const BulletText = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex gap-4 items-center'>
      <DotFilledIcon />
      <Text variant={"h5"}>{children}</Text>
    </div>
  );
};

export default BulletText;

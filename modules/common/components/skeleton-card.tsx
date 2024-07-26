/** @format */

import { Skeleton } from "@/modules/common/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className='flex flex-col space-y-3'>
      <Skeleton className='w-full h-[18rem] md:w-[20rem] md:h-[15rem] rounded-xl' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[100px]' />
      </div>
    </div>
  );
}

/** @format */

import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function EditProjectSkeleton() {
  return <div className="flex flex-col space-y-6">
    {Array.from({length: 8}).map((_, index) => <FeildsSkeleton key={index}/>)}
    <Skeleton className="w-52 aspect-square"/>
  </div>;
}

function FeildsSkeleton() {
  return (
    <div className='flex flex-col justify-center space-y-3 w-full'>
      <Skeleton className='w-20 h-5 rounded-md' />
      <Skeleton className='h-12 w-full md:w-[60vw] rounded-md' />
    </div>
  );
}

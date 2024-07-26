/** @format */

import React from "react";
import { LoaderCircle } from "lucide-react";

export default function LoadingSpinner({size}: {size?: number}) {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <LoaderCircle size={size || 16} className='animate-spin' />
    </div>
  );
}

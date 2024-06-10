/** @format */

import React from "react";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className='container mx-auto pb-10 md:px-24 mt-20 lg:mt-24 h-max'>
      {children}
    </div>
  );
}

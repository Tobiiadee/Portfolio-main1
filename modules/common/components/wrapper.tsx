/** @format */

import React from "react";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className='container mx-auto px-24 mt-24 h-max'>{children}</div>;
}

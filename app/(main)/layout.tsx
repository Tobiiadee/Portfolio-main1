/** @format */

import Footer from "@/layout/footer";
import Header from "@/layout/header";
import Wrapper from "@/layout/components/wrapper";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid'>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </div>
  );
}

/** @format */
"use client";

import React from "react";
import Footer from "@/layout/footer";
import Header from "@/layout/header";
import Wrapper from "@/layout/components/wrapper";
import StoreProvider from "@/modules/common/components/store-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <div className='grid'>
        <Header />
        <Wrapper>{children}</Wrapper>
        <Footer />
      </div>
    </StoreProvider>
  );
}

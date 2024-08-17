/** @format */

"use client";

import Footer from "@/layout/footer";
import Header from "@/layout/header";
import Wrapper from "@/layout/components/wrapper";
import React, { useEffect } from "react";
import Lenis from "lenis";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time * 0.5);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <div className='grid'>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </div>
  );
}

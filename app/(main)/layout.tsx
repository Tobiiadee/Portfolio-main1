/** @format */

"use client";

import Footer from "@/layout/footer";
import Header from "@/layout/header";
import Wrapper from "@/layout/components/wrapper";
import React, { useEffect } from "react";
import Lenis from "lenis";

export default function Layout({ children }: { children: React.ReactNode }) {
  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   return () => {
  //     // Cleanup animation frame on component unmount
  //     lenis.destroy(); // Clean up Lenis instance
  //   };
  // }, []);

  return (
    <div className='grid'>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </div>
  );
}

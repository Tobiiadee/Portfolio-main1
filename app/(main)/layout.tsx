/** @format */

import Footer from "@/layout/footer";
import Header from "@/layout/header";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

/** @format */

"use client";

import React, { useState, useEffect } from "react";
import { UserLink } from "@/modules/common/components/user-link";
import Link from "next/link";
import { Text } from "@/modules/common/components/text";
import Navigation from "./navigation";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className={`fixed top-0 left-0 shadow w-full bg-transparent grid place-items-center h-16 z-40 ${
        scrolled ? "backdrop-blur-md" : ""
      }`}>
      <div className='container md:px-24 flex justify-between items-center'>
        <Link href={"/"}>
          <Text variant={"h4"}>tobi.wdev</Text>
        </Link>
        <div className='flex justify-between space-x-20 items-center'>
          <Navigation />
        </div>
      </div>
    </motion.div>
  );
}

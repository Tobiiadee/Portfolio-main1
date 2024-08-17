/** @format */

"use client";

import React from "react";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "../ui/sonner";
import useLocalStorage from "@/hooks/use-localStorage";

export default function ClientThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [storedValue] = useLocalStorage("pTheme", "");

  return (
    <ThemeProvider
      attribute='class'
      defaultTheme={storedValue || "light"}
      enableSystem
      disableTransitionOnChange>
      {children}
      <Toaster />
    </ThemeProvider>
  );
}

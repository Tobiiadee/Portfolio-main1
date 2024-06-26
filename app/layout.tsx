/** @format */

import type { Metadata } from "next";
import { ThemeProvider } from "@/modules/common/components/theme-provider";
import "@fontsource-variable/playfair-display";
import "@fontsource/open-sauce-sans";
import "./globals.css";
import { Toaster } from "@/modules/common/ui/sonner";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tobi.wdev",
  description: "frontend web development portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head />
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

/** @format */

/** @format */

import type { Metadata } from "next";
import { ThemeProvider } from "@/modules/common/components/theme-provider";
import "@fontsource-variable/playfair-display";
import "@fontsource/open-sauce-sans";
import "@fontsource-variable/playfair-display";
import "@fontsource/open-sauce-sans";
import "./globals.css";
import { Toaster } from "@/modules/common/ui/sonner";
import SessionProvider from "@/modules/common/components/session-provider";
import { authOptions } from "@/lib/utils/auth-options";
import { getServerSession } from "next-auth";

// const inter = Inter({ subsets: ["latin"] });
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tobi Ade | personal portfolio",
  description: "tobi is a frontend web developer willing to offer the best services",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en'>
     <head/>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange>
          <SessionProvider session={session}>
            <div>{children}</div>
          </SessionProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

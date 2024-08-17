/** @format */

import type { Metadata } from "next";
import { ThemeProvider } from "@/modules/common/components/theme-provider";
import "@fontsource-variable/playfair-display";
import "@fontsource/open-sauce-sans";
import "@fontsource-variable/playfair-display";
import "@fontsource/open-sauce-sans";
import "./globals.css";
import SessionProvider from "@/modules/common/components/session-provider";
import { authOptions } from "@/lib/utils/auth-options";
import { getServerSession } from "next-auth";
import ClientThemeProvider from "@/modules/common/components/client-theme-provider";

// const inter = Inter({ subsets: ["latin"] });
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tobi Ade | Personal Portfolio",
  description:
    "Explore Tobi Ade's portfolio showcasing innovative web development and design projects. Specializing in modern technologies such as React, Next.js, and Firebase, I deliver high-quality, user-centric solutions tailored to your needs. View my work and contact me to discuss how we can bring your project to life.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en'>
      <head>
        <meta property='og:title' content='Tobi Ade | Personal Portfolio' />
        <meta
          property='og:description'
          content='Check out my projects and skills on my portfolio website.'
        />
        <meta
          property='og:image'
          content='https://portfolio10-git-main-tobi-ades-projects.vercel.app/images/TPF.jpeg'
        />
        <meta
          property='og:url'
          content='https://portfolio10-git-main-tobi-ades-projects.vercel.app'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:creator' content='@TobiWdev' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Tobi Ade | Personal Portfolio' />
        <meta property='fb:app_id' content='1690689051685715' />
      </head>
      <body>
        <SessionProvider session={session}>
          <ClientThemeProvider>{children}</ClientThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

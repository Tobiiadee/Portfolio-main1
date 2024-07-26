/** @format */

// middleware.ts

import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = req.nextUrl;

  // List of paths that require authentication
  const protectedPaths = ["/add-project", "/contact-request"];

  // Check if the path requires authentication and if the user is not authenticated
  if (protectedPaths.some((path) => pathname.startsWith(path)) && !token) {
    const url = req.nextUrl.clone();
    url.pathname = "/sign-in"; // Redirect to sign-in page
    url.search = `callbackUrl=${encodeURIComponent(req.nextUrl.pathname)}`;
    return NextResponse.redirect(url);
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Define the config with a type
interface Config {
  matcher: string[];
}

export const config: Config = {
  matcher: ["/add-project", "/contact-request"], // Define paths to be protected
};

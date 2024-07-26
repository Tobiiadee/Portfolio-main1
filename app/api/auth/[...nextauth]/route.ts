/** @format */

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID! ,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    Credentials({
      name: "Credentials",
      credentials: {},
      async authorize(credentials): Promise<any> {
        return signInWithEmailAndPassword(
          auth,
          (credentials as any).email || "",
          (credentials as any).password || ""
        )
          .then((userCredentials) => {
            if (userCredentials.user) {
              return userCredentials.user;
            }
            return null;
          })
          .catch((err) => console.log(err));
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: "/sign-in",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

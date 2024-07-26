/** @format */

import { Metadata } from "next";
import SignInComp from "@/layout/components/sign-in-comp";
import React from "react";

export const metadata: Metadata = {
  title: "Login - tobi.wdev",
  description: "Login to your account to access your dashboard.",
};

const SignIn = () => {
  return (
    <div>
      <SignInComp />
    </div>
  );
};

export default SignIn;

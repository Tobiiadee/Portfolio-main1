/** @format */

import { toast } from "sonner";

export interface ApiResponse {
  data?: {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered: boolean;
  };
  onSuccess?: boolean;
  onError?: boolean;
  message?: string;
}

export interface ApiError {
  data?: {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered: boolean;
  };
  status: number;
  message: string;
  onError?: boolean;
}

export async function signInAction({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<ApiResponse | ApiError> {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

  const userData = {
    email: email,
    password: password,
    returnSecureToken: true,
  };

  try {
    const user = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    if (!user.ok) {
      if (user.status >= 400) {
        toast.error("Invalid Credentials");
        return {
          status: user.status,
          message: "Invalid Credentials",
          onError: true,
        };
      }
      return { status: user.status, message: user.statusText, onError: true };
    }

    const data = await user.json();

    toast.success("Logged in successfully");

    return { data, onSuccess: true };
  } catch (error) {
    console.error(error);
    toast.error("An error occurred while logging in");
    return { status: 500, message: "Network error", onError: true };
  }
}

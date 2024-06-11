/** @format */

"use client";

import { z } from "zod";

export const FeedBackSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Enter a valid email address" })
    .email()
    .optional(),
  feedback: z.string().optional(),
});

export type ProjectType = {
  title: string;
  subTitle: string;
  url: string;
  firstDescription: string;
  secondDescription: string;
  thumbnailUrl: string[];
  industry: string;
  services: string[];
  client: string;
  date: string;
};



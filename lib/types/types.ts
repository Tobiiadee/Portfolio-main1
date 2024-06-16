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

export const SignInSchema = z.object({
  email: z.string().min(1, { message: "Enter a valid email address" }).email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export const ProjectSchema = z.object({
  title: z.string().min(1, { message: "What is your project title?" }),
  subTitle: z.string(),
  url: z.string().url(),
  description: z
    .string()
    .min(20, { message: "Give a better description for your project." }),
  thumbnailUrl: z.array(z.string()),
  industry: z.string().min(1, { message: "What industry?" }),
  services: z.array(z.string()),
  client: z.string().min(1, { message: "Who are your clients?" }),
  date: z.date({message: "You left out the date input."}),
});

export const ContactSchema = z.object({
  name: z.string().min(1, { message: "Enter your name" }),
  email: z
    .string()
    .email({message: "Enter a valid email address"}),
  message: z.string().min(1, { message: "What's your message?" }),
});

export interface project {
  title: string;
  subTitle: string;
  url: string;
  description: string;
  thumbnailUrl: string[];
  industry: string;
  services: string[];
  client: string;
  date: string;
}

export interface ProjectsData {
  [key: string]: project;
}

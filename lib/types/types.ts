/** @format */

"use client";

import { z } from "zod";

export const FeedBackSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
  feedback: z.string().min(2, { message: "You have not enter your feedback" }),
});

export const SignInSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
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
  industry: z.string().min(1, { message: "What industry?" }),
  services: z.array(z.string()),
  client: z.string().min(1, { message: "Who are your clients?" }),
  stage: z.enum(["completed", "ongoing"]),
  date: z.date({ message: "You left out the date input." }),
});

export const ContactSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: "Enter a valid email address" }),
  message: z
    .string()
    .min(1, {
      message:
        "To provide you with the best possible service and create a tailored solution that meets your unique needs, I need to understand the specifics of your project.",
    }),
});

export const SendContactRequestSchema = z.object({
  email: z.string().email(),
  subject: z.string(),
  message: z.string().min(1, { message: "Ths field is required" }),
});

export interface project {
  title: string;
  subTitle: string;
  url: string;
  description: string;
  thumbnailUrl: string;
  industry: string;
  services: string[];
  client: string;
  date: string;
}
export interface ProjectReturn {
  title: string;
  subTitle: string;
  url: string;
  description: string;
  thumbnailUrl: string;
  industry: string;
  stage: string;
  services: string[];
  client: string;
  date: string;
  id: string;
}

export interface ProjectReturnType {
  [key: string]: ProjectReturnType;
}

export interface ProjectsData {
  [key: string]: project;
}

export interface DynamicObject {
  [key: string]: any; // This allows the object to have any number of properties with any type
}

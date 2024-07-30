/** @format */

import {
  AdminEmailTemplate,
  ClientEmailTemplate,
  ContactRequestEmailTemplate,
  FeedbackEmailTemplate,
} from "@/layout/components/email-template";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export interface ContactFormRequest {
  name?: string;
  message: string;
  address: string;
  subject?: string;
  feedback?: boolean;
  request?: boolean;
}

export async function POST(req: NextRequest) {
  const {
    name,
    message,
    address,
    subject,
    feedback,
    request,
  }: ContactFormRequest = (await req.json()) as ContactFormRequest;

  try {
    const transport = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Email to the admin
    const adminMailOption = {
      from: `Portfolio: <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      text: message,
      subject: `Portfolio contact request from: ${name} <${address}>`,
      html: AdminEmailTemplate(name!, message, address),
    };

    // Thank-you email to the client
    const clientMailOption = {
      from: `tobi.wdev: <${process.env.MAIL_USER}>`,
      to: address,
      subject: "Thank you for reaching out!",
      text: `Hi ${name},\n\nThank you for reaching out to us. We have received your message and will get back to you shortly.\n\nBest regards,\nYour Company`,
      html: ClientEmailTemplate(name!),
    };

    const feedBackOption = {
      from: `tobi.wdev: <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: `Portfolio- Feedback from: ${address}`,
      text: message,
      html: FeedbackEmailTemplate(message, address),
    };

    const contactRequest = {
      from: `tobi.wdev: <${process.env.MAIL_USER}>`,
      to: address,
      subject: subject,
      text: message,
      html: ContactRequestEmailTemplate(message),
    };

    // console.log(`Request: ${request}`);

    if (request) {
      //send email to contact
      transport.sendMail(contactRequest);
    } else if (feedback) {
      //Send feedback email to admin
      transport.sendMail(feedBackOption);
    } else {
      // Send emails concurrently
      await Promise.all([
        transport.sendMail(adminMailOption),
        transport.sendMail(clientMailOption),
      ]);
    }

    return NextResponse.json(
      { message: "Emails sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.log("Email error:", error);
    if (error instanceof TypeError && error.message === "Failed to fetch") {
      return NextResponse.json(
        { status: "error", message: "Network error" },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { message: "Failed to send emails" },
      { status: 500 }
    );
  }
}

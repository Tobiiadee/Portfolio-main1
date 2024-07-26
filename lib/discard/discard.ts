/** @format */

import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  message?: string;
  error?: string;
};

export interface MailRequestBody {
  recipientEmails?: string | string[];
  subject: string;
  text: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { recipientEmails, subject, text }: MailRequestBody = req.body;

    if (!recipientEmails || !subject || !text) {
      return res
        .status(400)
        .json({ message: "Bad request: Missing required fields." });
    }

    const recipients = Array.isArray(recipientEmails)
      ? recipientEmails.join(",")
      : recipientEmails;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject,
      text,
    };

    try {
      await transporter.sendMail({
        ...mailOptions,
        html: "<h1>This is a test email</h1>",
      });
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({
        message: "Failed to send email",
        error: (error as Error).message,
      });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}



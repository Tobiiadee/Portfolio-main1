/** @format */

import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.NODE_ENV !== "development", // true
  auth: {
    user: process.env.MAIL_USER,
    password: process.env.MAIL_PASS,
  },
} as SMTPTransport.Options);

type SendEmailData = {
  sender: Mail.Address;
  recipients: Mail.Address;
  subject: string;
  message: string;
};

export const sendEmail = async (data: SendEmailData) => {
  const { sender, recipients, subject, message } = data;

  return await transport.sendMail({
    from: sender,
    to: recipients,
    subject,
    html: message,
    text: message,
  });
};

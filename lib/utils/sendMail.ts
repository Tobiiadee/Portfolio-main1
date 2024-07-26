/** @format */

import {  SendMailOptions } from "nodemailer";

const nodemailer = require("nodemailer");
import { oAuth2Client } from "@/lib/utils/oauth2client";

export interface SendEmailParams {
  name: string;
  address: string;
  message: string;
}

const sendEmail = async ({ name, address, message }: SendEmailParams) => {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "oAuth2",
        user: process.env.MAIL_USER as string,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions: SendMailOptions = {
      from: `TEST_EMAIL From: ${name} <${address}>`,
      to: "tobi.wdev@gmail.com",
      subject: "Test Email From Portfolio Contact Form!!",
      text: message,
      html: `<h1>${message}</h1>`,
    };

    const result = await transport.sendMail(mailOptions);

    return result;
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;

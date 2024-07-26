/** @format */

import sendEmail, { SendEmailParams } from "./sendMail";

export default async function sendMailHelper({
  name,
  address,
  message,
}: SendEmailParams) {
  const emailData = {
    name,
    message,
    address,
  };
  sendEmail(emailData);
}

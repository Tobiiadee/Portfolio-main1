/** @format */

// import { google } from "googleapis";
const { google } = require("googleapis");

const Client_Id = process.env.GOOGLE_CLIENT_ID;
const Client_Secret = process.env.GOOGLE_CLIENT_SECRET;
const Redirect_Url = process.env.GOOGLE_REDIRECT_URI;

export const oAuth2Client = new google.auth.OAuth2(
  Client_Id,
  Client_Secret,
  Redirect_Url
);

oAuth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

// async function sendMail() {
//     const accessToken = await oAuth2Client.getAccessToken();
// }

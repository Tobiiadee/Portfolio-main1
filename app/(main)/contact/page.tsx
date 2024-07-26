/** @format */

import ContactComp from "@/layout/components/contact-comp";
import { SendEmailParams } from "@/lib/utils/sendMail";
import sendMailHelper from "@/lib/utils/sendMailHelper";
import React from "react";

export default function Contact() {
  
  return (
    <div>
      <ContactComp  />
    </div>
  );
}

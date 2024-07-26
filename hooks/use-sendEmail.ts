/** @format */

import { ContactFormRequest } from "@/app/api/sendMail/route";
import { useState } from "react";

const useSendEmail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [onSuccess, setOnSuccess] = useState(false);

  async function sendMail({
    name,
    address,
    message,
    subject,
    feedback,
    request,
  }: ContactFormRequest) {
    setLoading(true);
    setError(null);
    setOnSuccess(false);
    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address,
          name,
          message,
          feedback,
          subject,
          request,
        }),
      });

      if (!res.ok) {
        setError(true);
        throw new Error();
      }
      const dataRes = res.json();
      setLoading(false);
      setOnSuccess(true);
      return dataRes;
    } catch (error) {
      setError(true);
      console.log("An error occurred");
    }
  }

  return { sendMail, loading, error, onSuccess };
};

export default useSendEmail;

/** @format */

import { useState, useCallback } from "react";
import { DynamicObject } from "@/lib/types/types";

const useSendFirebaseProject = (path: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [onSuccess, setOnSuccess] = useState(false);

  const url = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL;

  const sendData = useCallback(
    async (data: DynamicObject) => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${url}/${path}.json`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!res.ok) {
          setError(true);
          throw new Error("An error occurred");
        }

        const dataRes = res.json();
        setOnSuccess(true);
        setLoading(false);
        return dataRes;
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    },
    []
  );

  return { sendData, loading, error, onSuccess };
};

export default useSendFirebaseProject;

/** @format */

import React from "react";
import { toast } from "sonner";

interface ShareProps {
  url?: string;
}

export default async function ShareContent(content: string) {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Share This Link",
        url: content,
      });
      toast.success("Content copied for sharing!");
    } catch (error) {
      toast.error(`Error copying content: ${error}`);
    }
  } else {
    toast("Web Share API not supported in this browser.");
  }
}

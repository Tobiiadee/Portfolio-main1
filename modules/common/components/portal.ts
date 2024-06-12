/** @format */
"use client"

// components/Portal.ts
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }: { children: React.ReactNode }) => {
  const portalRoot = useRef(document.getElementById("portal-root"));

  useEffect(() => {
    if (!portalRoot.current) {
      const root = document.createElement("div");
      root.id = "portal-root";
      document.body.appendChild(root);
      portalRoot.current = root;
    }
  }, []);

  if (!portalRoot.current) {
    return null;
  }

  return createPortal(children, portalRoot.current);
};

export default Portal;

/** @format */


// components/Modal.tsx
import React from "react";
import Portal from "./portal";
import { Button } from "../ui/button";

const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <Portal>
      <div
        className='fixed top-0 left-0 w-dvw h-dvh flex items-center justify-center bg-black/50 z-30'
        onClick={onClose}>
        <div
          className="z-50 border"
          onClick={(e) => e.stopPropagation()}>
          {children}
          <Button onClick={onClose} className="">
            Close
          </Button>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;

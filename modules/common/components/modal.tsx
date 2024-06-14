/** @format */

// components/Modal.tsx
import React from "react";
// import { Button } from "../ui/button";

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
    <div
      className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black z-40'
      onClick={onClose}>
      <div className='z-50' onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;

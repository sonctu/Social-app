import React, { FC, ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import XIcon from "../components/Icons/XIcon";

interface IProps {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}
const ModalLayout: FC<IProps> = ({ children, isOpen, handleClose }) => {
  const overplayRef = useRef<HTMLDivElement>(null);
  return createPortal(
    <div
      className={`fixed inset-0 z-[100] transition-all flex duration-200 items-center justify-center ${
        isOpen ? "opacity-100 visible" : "invisible opacity-0"
      }`}
      onClick={(e) => {
        if (overplayRef.current === e.target) {
          handleClose();
        }
      }}
    >
      <div
        className="absolute inset-0 bg-[#575757] bg-opacity-60"
        ref={overplayRef}
      ></div>
      <button
        className="absolute flex items-center justify-center w-8 h-8 text-white top-2 right-2"
        onClick={handleClose}
      >
        <XIcon></XIcon>
      </button>
      {children}
    </div>,
    document.body
  );
};

export default ModalLayout;

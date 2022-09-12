import React, { FC } from "react";
import ModalComment from "./ModalComment";
import ModalPost from "./ModalPost";

const Modal: FC = () => {
  return (
    <>
      <ModalPost></ModalPost>
      <ModalComment></ModalComment>
    </>
  );
};

export default Modal;

import React, { FC } from "react";
import { useDispatch } from "react-redux";
import ModalLayout from "../../../layouts/ModalLayout";
import { useModalSelector } from "../../../store/selectors";
import { hideModalComment } from "../../../store/slices/modalSlice";

const ModalComment: FC = () => {
  const { isOpenComment } = useModalSelector();
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideModalComment(false));
  };
  return (
    <ModalLayout isOpen={isOpenComment} handleClose={handleClose}>
      <div>red</div>
    </ModalLayout>
  );
};

export default ModalComment;

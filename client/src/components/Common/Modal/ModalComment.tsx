import React, { FC } from "react";
import { useDispatch } from "react-redux";
import ModalLayout from "../../../layouts/ModalLayout";
import { useModalSelector } from "../../../store/selectors";
import { hideModalComment } from "../../../store/slices/modalSlice";
import OptionIcon from "../../Icons/OptionIcon";
import CommentInput from "../CommentInput";
import CommentItem from "../CommentItem";
import ImageGradient from "../ImageGradient";
import PostContent from "../PostContent";

const ModalComment: FC = () => {
  const { isOpenComment } = useModalSelector();
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideModalComment(false));
  };
  return (
    <ModalLayout isOpen={isOpenComment} handleClose={handleClose}>
      <div
        className={`flex bg-white transition-all w-[920px] max-h-[577px] ${
          isOpenComment ? "scale-100" : "scale-110"
        }`}
      >
        <div className="flex-[4]">
          <img
            src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-deo-kinh-700x933.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-[5]">
          <div className="flex items-center justify-between px-4 py-3 text-sm border-b border-grayColor">
            <div className="flex items-center gap-2">
              <ImageGradient width="w-[42px]" height="h-[42px]"></ImageGradient>
              <h3 className="font-semibold">son120402</h3>
            </div>
            <span className="cursor-pointer">
              <OptionIcon></OptionIcon>
            </span>
          </div>
          <ul className="max-h-[332px] p-4 h-full overflow-y-auto no-scrollbar">
            <CommentItem></CommentItem>
            <CommentItem></CommentItem>
            <CommentItem></CommentItem>
            <CommentItem></CommentItem>
            <CommentItem></CommentItem>
          </ul>
          <div className="px-4 py-2 border-y border-grayColor">
            <PostContent></PostContent>
          </div>
          <CommentInput></CommentInput>
        </div>
      </div>
    </ModalLayout>
  );
};

export default ModalComment;

import React, { FC } from "react";
import EmotionIcon from "../Icons/EmotionIcon";

const CommentInput: FC = () => {
  return (
    <div className="flex items-center px-4 py-3 border-t border-grayColor">
      <span className="mr-2 cursor-pointer">
        <EmotionIcon></EmotionIcon>
      </span>
      <input
        type="text"
        placeholder="Add a comment..."
        className="flex-1 pr-2 text-sm text-blackPrimary"
      />
      <span className="text-sm font-semibold cursor-pointer text-bluePrimary">
        Post
      </span>
    </div>
  );
};

export default CommentInput;

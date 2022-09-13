import React, { FC } from "react";
import OptionIcon from "../Icons/OptionIcon";
import ImageGradient from "../Common/ImageGradient";
import PostContent from "../Common/PostContent";
import CommentInput from "../Common/CommentInput";

const PostItem: FC = () => {
  return (
    <div className="mb-4 bg-white border rounded-md border-grayColor">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <ImageGradient width="w-[42px]" height="h-[42px]"></ImageGradient>
          <h3 className="text-sm font-semibold">doc sach moi ngay</h3>
        </div>
        <div>
          <OptionIcon></OptionIcon>
        </div>
      </div>
      <div className="h-[470px] w-full">
        <img
          src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-deo-kinh-700x933.jpg"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-3">
        <PostContent></PostContent>
      </div>
      <CommentInput></CommentInput>
    </div>
  );
};

export default PostItem;

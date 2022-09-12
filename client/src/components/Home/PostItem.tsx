import React, { FC } from "react";
import OptionIcon from "../Icons/OptionIcon";
import HeartIcon from "../Icons/HeartIcon";
import CommentIcon from "../Icons/CommentIcon";
import ShareIcon from "../Icons/ShareIcon";
import SaveIcon from "../Icons/SaveIcon";
import ImageGradient from "../Common/ImageGradient";
import EmotionIcon from "../Icons/EmotionIcon";
import { useDispatch } from "react-redux";
import { showModalComment } from "../../store/slices/modalSlice";

const PostItem: FC = () => {
  const dispatch = useDispatch();
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
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <div className="cursor-pointer">
              <HeartIcon></HeartIcon>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => dispatch(showModalComment(true))}
            >
              <CommentIcon></CommentIcon>
            </div>
            <div className="cursor-pointer">
              <ShareIcon></ShareIcon>
            </div>
          </div>
          <div className="cursor-pointer">
            <SaveIcon></SaveIcon>
          </div>
        </div>
        <div className="text-sm font-bold">10,939 like</div>
      </div>
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
    </div>
  );
};

export default PostItem;

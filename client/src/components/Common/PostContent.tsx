import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { showModalComment } from "../../store/slices/modalSlice";
import CommentIcon from "../Icons/CommentIcon";
import HeartIcon from "../Icons/HeartIcon";
import SaveIcon from "../Icons/SaveIcon";
import ShareIcon from "../Icons/ShareIcon";

const PostContent: FC = () => {
  const dispatch = useDispatch();
  return (
    <section>
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
      <span className="block mt-1 text-grayPrimary text-[10px] uppercase">
        14 giờ trước
      </span>
    </section>
  );
};

export default PostContent;

import React, { useState } from "react";
import HeartIcon from "../Icons/HeartIcon";
import LikeIcon from "../Icons/LikeIcon";
import OptionIcon from "../Icons/OptionIcon";

const CommentItem = () => {
  const [like, setLike] = useState(false);
  return (
    <li className="flex py-3">
      <img
        src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-deo-kinh-700x933.jpg"
        alt=""
        className="object-cover w-8 h-8 rounded-full"
      />
      <div className="flex-1 ml-3 mr-2">
        <div className="text-sm">
          <h3 className="inline-block mr-2 font-semibold select-none">
            minh.nguye22
          </h3>
          <p className="inline">
            cưng vậy Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Adipisci eligendi repellat, beatae officia dolorem alias at,
            inventore harum molestias eveniet laboriosam quod atque fugiat? Nemo
            doloremque earum non voluptas molestiae?
          </p>
        </div>
        <div className="flex items-center gap-4 text-grayPrimary">
          <span className="text-xs select-none text-inherit">11 giờ</span>
          <span className="text-xs font-bold cursor-pointer select-none text-inherit">
            Trả lời
          </span>
          <span className="text-sm cursor-pointer text-inherit">
            <OptionIcon></OptionIcon>
          </span>
        </div>
      </div>
      <span
        className="w-3 h-3 cursor-pointer hover:text-grayPrimary"
        onClick={() => setLike(!like)}
      >
        {like ? <LikeIcon></LikeIcon> : <HeartIcon></HeartIcon>}
      </span>
    </li>
  );
};

export default CommentItem;

import React, { FC } from "react";
import FollowList from "./FollowList";
import PostItem from "./PostItem";

const Post: FC = () => {
  return (
    <div className="w-[470px]">
      <FollowList></FollowList>
      <div className="mt-4">
        <PostItem></PostItem>
      </div>
    </div>
  );
};

export default Post;

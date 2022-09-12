import React, { FC } from "react";
import ImageGradient from "../Common/ImageGradient";

const FollowList: FC = () => {
  return (
    <div className="flex items-center max-w-full gap-3 px-3 py-4 border rounded-md border-grayColor">
      <div className="flex flex-col items-center w-[66px] gap-1">
        <ImageGradient width="w-[66px]" height="h-[66px]"></ImageGradient>
        <h4 className="w-full text-xs truncate">hanhbicfafsdah</h4>
      </div>
    </div>
  );
};

export default FollowList;

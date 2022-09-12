import React, { FC, useState } from "react";
import SearchIcon from "../Icons/SearchIcon";
import XCircleIcon from "../Icons/XCircleIcon";
import XIcon from "../Icons/XIcon";

const Search: FC = () => {
  const [focus, setFocus] = useState(false);
  return (
    <div className="relative">
      <div className="flex items-center gap-2 w-[268px] ml-10 bg-[#EFEFEF] rounded-md px-3">
        <span className="flex-shrink-0 cursor-pointer">
          <SearchIcon></SearchIcon>
        </span>
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 text-sm bg-inherit"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        {focus && (
          <span className="w-5 h-5 cursor-pointer text-graySecondary">
            <XCircleIcon></XCircleIcon>
          </span>
        )}
      </div>
      {focus && (
        <div className="absolute top-full w-[375px] max-h-[362px] mt-2 pb-2 shadow-3xl overflow-y-auto right-0 -left-4 select-none rounded bg-white no-scrollbar">
          <div className="sticky top-0 flex items-center justify-between px-4 py-3 bg-white border-b border-grayColor">
            <span className="text-sm font-bold text-blackPrimary">Gần đây</span>
            <span className="text-xs font-semibold cursor-pointer text-bluePrimary">
              Xóa tất cả
            </span>
          </div>
          <ul>
            {new Array(20).fill(0 as never).map(() => (
              <li className="flex items-center px-4 py-2 transition-all duration-200 cursor-pointer hover:bg-bgPrimary">
                <img
                  src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg"
                  alt=""
                  className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                />
                <div className="flex-1 ml-3">
                  <h3 className="text-sm font-bold text-blackPrimary">
                    reactjs
                  </h3>
                  <div className="text-sm text-grayPrimary">ReactJS</div>
                </div>
                <span className="inline-block">
                  <XIcon></XIcon>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;

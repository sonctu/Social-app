import React, { FC } from "react";

const Recommend: FC = () => {
  return (
    <div className="flex-1">
      <div className="flex items-center justify-between mt-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14">
            <img
              src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-deo-kinh-700x933.jpg"
              alt=""
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-blackPrimary">
              son120402
            </h3>
            <h2 className="text-sm text-grayPrimary">Sơn Nguyễn</h2>
          </div>
        </div>
        <div className="text-xs font-bold text-bluePrimary">Switch</div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex-1 text-sm font-bold text-grayPrimary">
            Suggestions for you
          </div>
          <div className="text-xs font-bold text-blackPrimary">See all</div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between mt-4 mb-[10px]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8">
                <img
                  src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-deo-kinh-700x933.jpg"
                  alt=""
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold text-blackPrimary">
                  son120402
                </h3>
                <h2 className="text-xs text-grayPrimary">Sơn Nguyễn</h2>
              </div>
            </div>
            <div className="text-xs font-bold text-bluePrimary">Follow</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;

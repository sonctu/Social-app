import React, { FC } from "react";
import ImageGradient from "../components/Common/ImageGradient";
import ChevronDown from "../components/Icons/ChevronDown";
import OptionIcon from "../components/Icons/OptionIcon";
import MainLayout from "../layouts/MainLayout";

const ProfilePage: FC = () => {
  return (
    <MainLayout>
      <div className="px-40">
        <div className="flex gap-7 mb-11">
          <div className="w-[292px] h-[208px] flex items-center justify-center">
            <ImageGradient width="w-[150px]" height="h-[150px]"></ImageGradient>
          </div>
          <div className="flex-1">
            <div className="flex items-center py-[9px]">
              <h2 className="text-[28px] text-blackPrimary font-light mr-[28px]">
                anh son
              </h2>
              <button className="bg-bluePrimary py-[5px] px-[25px] rounded text-white text-sm font-bold">
                Theo dõi
              </button>
              <div className="bg-bluePrimary ml-2 mr-[13px] py-[5px] px-[9px] rounded text-white text-sm font-semibold">
                <ChevronDown></ChevronDown>
              </div>
              <div>
                <OptionIcon></OptionIcon>
              </div>
            </div>
            <div className="flex items-center gap-10 my-5 text-blackPrimary">
              <div className="text-sm">
                <span className="font-semibold">1,355</span> bài viết
              </div>
              <div className="text-sm">
                <span className="font-semibold">1.1M</span> người theo dõi
              </div>
              <div className="text-sm">
                Đang theo dõi <span className="font-semibold">1.1M</span> người
                dùng
              </div>
            </div>
            <div>
              <div className="font-bold text-blackPrimary">anh son</div>
              <div className="text-grayPrimary">Nhà văn</div>
              <p className="text-blackPrimary">
                Một lần tới nhân gian, phải sống đời rực rỡ.!
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center px-10">
          <div className="flex flex-col items-center py-[10px] px-[15px] gap-4">
            <div className="relative rounded-full w-[77px] h-[77px] border border-grayPrimary">
              <img
                src="https://taimienphi.vn/tmp/cf/aut/hinh-nen-girl-xinh-1.jpg"
                alt=""
                className="object-cover w-full h-full border-2 border-white rounded-full"
              />
            </div>
            <h4 className="w-full text-sm font-bold max-w-[77px] truncate text-blackPrimary">
              hanhbich
            </h4>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfilePage;

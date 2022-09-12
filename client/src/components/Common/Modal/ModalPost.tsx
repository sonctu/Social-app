import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { avatar } from "../../../assets";
import ModalLayout from "../../../layouts/ModalLayout";
import { useModalSelector } from "../../../store/selectors";
import { hideModalPost } from "../../../store/slices/modalSlice";
import { formatChangeNumber } from "../../../utils/constants";
import EmotionIcon from "../../Icons/EmotionIcon";
import LocationIcon from "../../Icons/LocationIcon";
import DropZone from "../DropZone";

const ModalPost: FC = () => {
  const [textLength, setTextLength] = useState<number>(0);
  const { isOpenPost } = useModalSelector();
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideModalPost(false));
  };
  return (
    <ModalLayout isOpen={isOpenPost} handleClose={handleClose}>
      <div
        className={`relative z-10 w-[880px] flex rounded-xl transition-all duration-200 flex-col bg-white h-[520px] overflow-hidden ${
          isOpenPost
            ? "opacity-100 visible scale-100"
            : "opacity-0 invisible scale-75"
        }`}
      >
        <div className="relative p-2 text-center border-b border-grayColor">
          <span className="text-sm font-semibold select-none">
            Create new post
          </span>
          <button className="absolute text-sm font-bold right-2 text-bluePrimary">
            Share
          </button>
        </div>
        <div className="flex h-full">
          <div className="relative flex items-center justify-center w-3/5 border-r select-none border-grayColor">
            <DropZone></DropZone>
          </div>
          <div className="flex flex-col w-2/5">
            <div className="px-3 py-4">
              <div className="flex items-center gap-2">
                <img src={avatar} alt="" className="object-cover w-7 h-7" />
                <h3 className="font-bold select-none text-blackPrimary">
                  son120402
                </h3>
              </div>
              <div className="mt-3 mb-2 w-full h-[175px]">
                <textarea
                  name="caption"
                  id="caption"
                  placeholder="Write a caption..."
                  maxLength={2200}
                  onChange={(e) => setTextLength(e.target.value.length)}
                  className="w-full h-full text-sm resize-none text-blackPrimary no-scrollbar"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <span className="cursor-pointer text-grayPrimary">
                  <EmotionIcon></EmotionIcon>
                </span>
                <span className="text-xs select-none text-grayPrimary">
                  {formatChangeNumber(textLength)}/2.200
                </span>
              </div>
            </div>
            <div className="flex items-center px-3 border-y border-grayColor">
              <input
                type="text"
                className="flex-1 py-3 pr-2 text-sm"
                placeholder="Add location"
              />
              <span>
                <LocationIcon></LocationIcon>
              </span>
            </div>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};

export default ModalPost;

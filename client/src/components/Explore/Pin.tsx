import React, { FC } from "react";
import { Size } from "../../types/explore";

interface IProps {
  size: Size;
}
const Pin: FC<IProps> = ({ size }) => {
  const setStylesSize = (size: Size) => {
    switch (size) {
      case Size.LARGE:
        return "row-end-[span_22]";
      case Size.MEDIUM:
        return "row-end-[span_18]";
      case Size.SMALL:
        return "row-end-[span_12]";
      default:
        return "";
    }
  };
  const classStyles = setStylesSize(size);
  return (
    <div className={`bg-red-500 cursor-pointer rounded-2xl ${classStyles}`}>
      <img
        src={
          "https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg"
        }
        alt=""
        className="object-cover w-full h-full rounded-2xl"
      />
    </div>
  );
};

export default Pin;

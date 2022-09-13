import React, { FC } from "react";

interface IProps {
  width: string;
  height: string;
  className?: string;
}
const ImageGradient: FC<IProps> = ({
  width = "",
  height = "",
  className = "",
}) => {
  return (
    <div
      className={`instagram-color flex-shrink-0 ${width} ${height} ${className}`}
    >
      <img
        src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-deo-kinh-700x933.jpg"
        alt=""
        className="object-cover w-full h-full rounded-full"
      />
    </div>
  );
};

export default ImageGradient;

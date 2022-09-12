import React, { FC } from "react";
import { Size } from "../../types/explore";
import Pin from "./Pin";

const PinterestLayout: FC = () => {
  return (
    <div className="w-full py-4 justify-center min-h-screen gap-4 grid auto-cols-[10px] grid-cols-[repeat(auto-fill,_280px)]">
      <Pin size={Size.LARGE}></Pin>
      <Pin size={Size.SMALL}></Pin>
      <Pin size={Size.MEDIUM}></Pin>
      <Pin size={Size.LARGE}></Pin>
      <Pin size={Size.MEDIUM}></Pin>
      <Pin size={Size.SMALL}></Pin>
      <Pin size={Size.LARGE}></Pin>
      <Pin size={Size.MEDIUM}></Pin>
      <Pin size={Size.SMALL}></Pin>
    </div>
  );
};

export default PinterestLayout;

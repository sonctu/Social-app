import React from "react";
import FacebookIcon from "../Icons/FacebookIcon";

const ButtonFacebook = () => {
  return (
    <div className="flex items-center justify-center gap-1 px-2 py-1 text-xs font-medium rounded-sm cursor-pointer bg-bluePrimary">
      <FacebookIcon></FacebookIcon>
      <span className="font-medium">Sign in with facebook</span>
    </div>
  );
};

export default ButtonFacebook;

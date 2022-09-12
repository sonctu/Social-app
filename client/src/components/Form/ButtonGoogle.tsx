import React from "react";
import GoogleIcon from "../Icons/GoogleIcon";

const ButtonGoogle = () => {
  return (
    <div className="flex bg-[#E0365D] rounded-sm px-2 py-1 items-center justify-center gap-1 text-xs font-medium cursor-pointer">
      <GoogleIcon></GoogleIcon>
      <span className="font-medium">Sign in with facebook</span>
    </div>
  );
};

export default ButtonGoogle;

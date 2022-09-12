import React, { FC, useState } from "react";
import SaveIcon from "../Icons/SaveIcon";
import SettingIcon from "../Icons/SettingIcon";
import TransferIcon from "../Icons/TransferIcon";
import UserIcon from "../Icons/UserIcon";

interface IProps {
  src: string;
  alt?: string;
}
type UserList = {
  title: string;
  icon: JSX.Element;
};
const userList: UserList[] = [
  {
    title: "Profile",
    icon: <UserIcon></UserIcon>,
  },
  {
    title: "Saved",
    icon: <SaveIcon></SaveIcon>,
  },
  {
    title: "Settings",
    icon: <SettingIcon></SettingIcon>,
  },
  {
    title: "Switch Accounts",
    icon: <TransferIcon></TransferIcon>,
  },
];
const Avatar: FC<IProps> = ({ src, alt }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative" onClick={() => setShow(!show)}>
      <div className={`w-6 h-6 cursor-pointer select-none`}>
        <img
          src={src}
          alt={alt}
          className={`w-full h-full ${
            show ? "border border-blackPrimary rounded-full" : ""
          }`}
        />
      </div>
      {show && (
        <ul className="absolute w-full bg-white top-full shadow-2xl overflow-hidden min-w-[220px] right-0 mt-3 rounded">
          {userList.length > 0 &&
            userList.map((item, index) => (
              <li
                className="flex items-center gap-2 px-4 py-3 transition-all duration-200 cursor-pointer hover:bg-grayColor"
                key={index}
              >
                <span className="flex items-center justify-center w-4 h-4">
                  {item.icon}
                </span>
                <span className="text-[13px]">{item.title}</span>
              </li>
            ))}
          <li className="px-4 py-3 text-[13px] transition-all duration-200 border-t cursor-pointer border-grayPrimary hover:bg-grayColor">
            Log Out
          </li>
        </ul>
      )}
    </div>
  );
};

export default Avatar;

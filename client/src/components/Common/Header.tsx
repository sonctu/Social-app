import React, { FC, MouseEventHandler, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ChevronDown from "../Icons/ChevronDown";
import ExploreIcon from "../Icons/ExploreIcon";
import FollowIcon from "../Icons/FollowIcon";
import HeartIcon from "../Icons/HeartIcon";
import HomeIcon from "../Icons/HomeIcon";
import MessengerIcon from "../Icons/MessengerIcon";
import NewPostIcon from "../Icons/NewPostIcon";
import StarIcon from "../Icons/StarIcon";
import Search from "./Search";
import { instagram, avatar } from "../../assets";
import Avatar from "./Avatar";
import { useDispatch } from "react-redux";
import { showModalPost } from "../../store/slices/modalSlice";

type NavHeaderList = {
  body: JSX.Element;
  onClick: MouseEventHandler<HTMLDivElement>;
};

const Header: FC = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navHeaderList: NavHeaderList[] = useMemo(
    () => [
      {
        body: <HomeIcon></HomeIcon>,
        onClick: () => {
          navigate("/");
        },
      },
      {
        body: <MessengerIcon></MessengerIcon>,
        onClick: () => {},
      },
      {
        body: <NewPostIcon></NewPostIcon>,
        onClick: () => {
          dispatch(showModalPost(true));
        },
      },
      {
        body: <ExploreIcon></ExploreIcon>,
        onClick: () => {
          navigate("/explore");
        },
      },
      {
        body: <HeartIcon></HeartIcon>,
        onClick: () => {},
      },
    ],
    [navigate, dispatch]
  );

  return (
    <header className="fixed z-50 w-full px-40 py-3 bg-white border-b border-grayColor">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Link to="/" className="w-24">
            <img src={instagram} alt="" />
          </Link>
          <span className="relative inline-block">
            <span
              className="inline-block cursor-pointer"
              onClick={() => setShow(!show)}
            >
              <ChevronDown></ChevronDown>
            </span>
            <ul
              className={`absolute shadow-3xl overflow-hidden bg-white w-[150px] rounded-[4px] top-full mt-2 -right-3 transition-all duration-300 ${
                !show && "translate-y-2 opacity-0 hidden"
              }`}
            >
              <li className="flex items-center gap-3 px-4 py-2 transition-all duration-300 cursor-pointer select-none hover:bg-grayColor">
                <span className="w-4">
                  <FollowIcon></FollowIcon>
                </span>
                <span className="text-sm font-medium">Following</span>
              </li>
              <li className="flex items-center gap-3 px-4 py-2 transition-all duration-300 cursor-pointer select-none hover:bg-grayColor">
                <span className="w-4">
                  <StarIcon></StarIcon>
                </span>
                <span className="text-sm font-medium">Favorites</span>
              </li>
            </ul>
          </span>
        </div>
        <div>
          <Search></Search>
        </div>
        <div className="flex items-center gap-6">
          {navHeaderList.map((item, index) => (
            <div
              className="cursor-pointer text-blackPrimary"
              key={index}
              onClick={item.onClick}
            >
              {item.body}
            </div>
          ))}
          <Avatar src={avatar}></Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;

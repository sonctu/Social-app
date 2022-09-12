import React, { FC } from "react";
import Header from "../components/Common/Header";

interface IProps {
  children: React.ReactNode;
}
const MainLayout: FC<IProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-bgPrimary">
      <Header></Header>
      <div className="pt-[77px]">{children}</div>
    </div>
  );
};

export default MainLayout;

import React, { FC } from "react";

interface IProps {
  children: React.ReactNode;
}
const FormLayout: FC<IProps> = ({ children }) => {
  return (
    <div className="w-full h-screen bg-bgPrimary">
      <div className="flex items-center justify-center h-full">{children}</div>
    </div>
  );
};

export default FormLayout;

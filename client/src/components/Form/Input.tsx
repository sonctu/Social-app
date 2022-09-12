import React, { FC, InputHTMLAttributes } from "react";
import { Control, useController } from "react-hook-form";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  control: Control<any>;
  name: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
}

const Input: FC<IProps> = ({ control, name, type = "text", ...props }) => {
  const { field } = useController({
    control,
    name,
  });
  return (
    <input
      className={`bg-bgPrimary rounded border border-[#ccc] text-[11px] w-full ${
        false ? "pt-[14px] pl-2 pb-[2px]" : "px-2 py-[9px]"
      }`}
      type={type}
      {...props}
      {...field}
    />
  );
};

export default Input;

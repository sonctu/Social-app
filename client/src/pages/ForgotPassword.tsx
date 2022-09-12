import React, { FC } from "react";
import { Link } from "react-router-dom";
import { bilibili } from "../assets";
import Input from "../components/Form/Input";
import FormLayout from "../layouts/FormLayout";
import { useForm } from "react-hook-form";
import { FormForgotPassword } from "../types/auth";

const ForgotPassword: FC = () => {
  const { control } = useForm<FormForgotPassword>({
    defaultValues: {
      accountName: "",
    },
  });
  return (
    <FormLayout>
      <form className="bg-white max-w-[350px] w-full pt-10 border border-[#ccc] rounded-sm text-center">
        <div className="flex items-center justify-center mb-4">
          <img src={bilibili} alt="instagram" className="w-24" />
        </div>
        <div className="px-10">
          <div className="text-xl font-bold capitalize">
            Trouble Logging In?
          </div>
          <p className="mt-3 text-xs text-graySecondary">
            Enter your email or username and we'll send you a link to get back
            into your account.
          </p>
          <div className="mt-3">
            <Input
              control={control}
              name="accountName"
              placeholder="Email or Username"
            ></Input>
          </div>
          <button
            type="submit"
            className="w-full px-2 py-1 mt-3 mb-4 text-sm font-medium text-white capitalize bg-blue-500 rounded-sm"
          >
            Send link reset
          </button>
        </div>

        <div className="text-xs">Or</div>

        <Link
          to="/sign-up"
          className="inline-block mt-2 text-sm font-semibold capitalize"
        >
          Create new account
        </Link>

        <Link
          to="/login"
          className="block hover:bg-graySecondary transition-all duration-200 text-sm font-medium border-t border-[#ccc] py-2 mt-5"
        >
          Back to login
        </Link>
      </form>
    </FormLayout>
  );
};

export default ForgotPassword;

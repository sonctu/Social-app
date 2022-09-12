import React, { FC } from "react";
import Input from "../components/Form/Input";
import FormLayout from "../layouts/FormLayout";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { instagram } from "../assets";
import { FormLoginValues } from "../types/auth";
import ButtonFacebook from "../components/Form/ButtonFacebook";
import ButtonGoogle from "../components/Form/ButtonGoogle";

const LoginPage: FC = () => {
  const { control, handleSubmit } = useForm<FormLoginValues>({
    defaultValues: {
      accountName: "",
      password: "",
    },
    mode: "onChange",
  });
  const handleLoginUser = async (values: FormLoginValues) => {
    console.log(values);
  };

  return (
    <FormLayout>
      <form
        onSubmit={handleSubmit(handleLoginUser)}
        className="bg-white max-w-[350px] w-full pt-10 pb-5 border border-[#ccc] rounded-sm text-center"
      >
        <div className="flex items-center justify-center mb-8">
          <img src={instagram} alt="instagram" />
        </div>
        <div className="px-10">
          <div className="mt-3">
            <Input
              control={control}
              name="accountName"
              placeholder="Phone number, username or email"
            ></Input>
          </div>
          <div className="mt-3">
            <Input
              control={control}
              name="password"
              type="password"
              placeholder="Password"
            ></Input>
          </div>
          <div className="mt-2 text-xs text-right text-blue-500">
            <Link to="/password/reset">Forgot your password?</Link>
          </div>
          <button
            type="submit"
            className="w-full px-2 py-1 mt-3 mb-4 text-sm font-medium text-white bg-blue-500 rounded-sm"
          >
            Log in
          </button>
          <div className="mb-3 text-xs">Or</div>

          <div className="flex flex-col gap-2">
            <ButtonFacebook></ButtonFacebook>
            <ButtonGoogle></ButtonGoogle>
          </div>
        </div>

        <div className="mt-3">
          <span className="mr-1 text-xs font-medium">
            Don't have an account?
          </span>
          <Link
            to="/sign-up"
            className="inline-block mt-2 text-sm font-semibold capitalize"
          >
            Sign up
          </Link>
        </div>
      </form>
    </FormLayout>
  );
};

export default LoginPage;

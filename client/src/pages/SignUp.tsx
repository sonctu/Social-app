import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { instagram } from "../assets";
import Input from "../components/Form/Input";
import FormLayout from "../layouts/FormLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormValues } from "../types/auth";
import ButtonFacebook from "../components/Form/ButtonFacebook";
import ButtonGoogle from "../components/Form/ButtonGoogle";

const schema = yup.object().shape({
  accountName: yup.string().required().email(),
  fullName: yup.string().required(),
  userName: yup.string().required(),
  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
      "Password contains at least 8 characters, 1 number,1 lowercase character,1 uppercase character"
    )
    .required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Password do not match"),
});
const SignUp = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      accountName: "",
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const handleSignUp = (values: FormValues) => {
    console.log(values);
  };
  return (
    <FormLayout>
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className="bg-white max-w-[350px] w-full pt-10 pb-5 border border-[#ccc] rounded-sm text-center"
      >
        <div className="flex items-center justify-center mb-4">
          <img src={instagram} alt="instagram" />
        </div>
        <div className="px-10">
          <div className="text-sm text-[#8e8e8e] mb-3">
            Sign up to see photos and videos from friends.
          </div>
          <div className="flex flex-col gap-2">
            <ButtonFacebook></ButtonFacebook>
            <ButtonGoogle></ButtonGoogle>
          </div>
          <div className="my-3 text-xs font-semibold">Or</div>
          <div>
            <Input
              control={control}
              name="accountName"
              type="text"
              placeholder="Phone number or email"
            ></Input>
          </div>
          <div className="mt-3">
            <Input
              control={control}
              name="fullName"
              type="text"
              placeholder="Full name"
            ></Input>
          </div>
          <div className="mt-3">
            <Input
              control={control}
              name="username"
              type="text"
              placeholder="Username"
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
          <div className="mt-3">
            <Input
              control={control}
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
            ></Input>
          </div>
          <button
            type="submit"
            className="w-full px-2 py-1 mt-3 mb-4 text-sm font-medium text-white capitalize bg-blue-500 rounded-sm"
          >
            Sign Up
          </button>
        </div>
        <div>
          <span className="mr-1 text-xs font-medium">Have an account?</span>
          <Link
            to="/login"
            className="inline-block mt-2 text-sm font-semibold capitalize"
          >
            Log in
          </Link>
        </div>
      </form>
    </FormLayout>
  );
};

export default SignUp;

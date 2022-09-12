import { useMutation } from "react-query";
import { loginUser } from "../services/auth";

export const useLogin = () => {
  return useMutation("login", loginUser);
};

import { useMutation } from "react-query";
import { signUpUser } from "../services/auth";

export const useSignUp = () => useMutation("sign-up", signUpUser);

import { UserLogin, UserSignUp } from "../types/auth";
import instance from "../utils/axios";

const loginUser = async (user: UserLogin) => {
  try {
    const response = await instance.post("/auth/login", user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const signUpUser = async (user: UserSignUp) => {
  try {
    const response = await instance.post("/auth/register", user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { loginUser, signUpUser };

export interface FormLoginValues {
  accountName: string;
  password: string;
}

export interface FormValues extends FormLoginValues {
  username: string;
  fullName: string;
  confirmPassword: string;
}
export interface FormForgotPassword {
  accountName: string;
}

export interface User {
  admin: boolean;
  createdAt: Date;
  email: string;
  updatedAt: Date;
  username: string;
  _id: string;
}

export type UserLogin = {
  email: string;
  password: string;
};
export type UserSignUp = {
  fullName: string;
  username: string;
  confirmPassword: string;
} & UserLogin;

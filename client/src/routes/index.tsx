import Explore from "../pages/Explore";
import ForgotPassword from "../pages/ForgotPassword";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PageNotFound from "../pages/PageNotFound";
import ProfilePage from "../pages/ProfilePage";
import SignUp from "../pages/SignUp";

interface Routes {
  path: string;
  element: JSX.Element;
}
const routes: Routes[] = [
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/sign-up",
    element: <SignUp></SignUp>,
  },
  {
    path: "/password/reset",
    element: <ForgotPassword></ForgotPassword>,
  },
  {
    path: "/:username",
    element: <ProfilePage></ProfilePage>,
  },
  {
    path: "/explore",
    element: <Explore></Explore>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
];

export { routes };

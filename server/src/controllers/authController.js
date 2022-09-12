const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let refreshTokens = [];
const authController = {
  generateToken: (user) => {
    const accessToken = jwt.sign(
      {
        id: user._id,
        admin: user.admin,
      },
      process.env.JWT_ACCESS_KEY,
      {
        expiresIn: "1d",
      }
    );
    const refreshToken = jwt.sign(
      {
        id: user._id,
        admin: user.admin,
      },
      process.env.JWT_REFRESH_KEY
    );
    return { accessToken, refreshToken };
  },
  registerUser: async (req, res) => {
    try {
      const { username, email, fullName, password } = req.body;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const user = await User.findOne({ email });
      if (user)
        return res.status(400).json({
          success: false,
          message: "This email already exists",
        });
      const newUser = new User({
        email,
        fullName,
        username,
        password: hashedPassword,
      });
      const userData = await newUser.save();
      const { accessToken, refreshToken } =
        authController.generateToken(userData);
      refreshTokens.push(refreshToken);
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        path: "/",
        sameSite: "strict",
        secure: false,
      });
      return res
        .status(200)
        .json({ ...userData._doc, accessToken, refreshToken });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user)
        return res.status(400).json({
          success: false,
          message: "This email does not exist",
        });
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword)
        return res.status(400).json({
          success: false,
          message: "Email or password is incorrect",
        });
      if (user && validPassword) {
        const { accessToken, refreshToken } =
          authController.generateToken(user);
        refreshTokens.push(refreshToken);
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          path: "/",
          sameSite: "strict",
          secure: false,
        });
        const { password, ...newUser } = user._doc;
        return res.status(200).json({ ...newUser, accessToken });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  refreshToken: async (req, res) => {
    try {
      const refreshToken = req.cookies.refreshToken;
      if (!refreshToken) return res.status(401).json("Unauthorized error");
      if (!refreshTokens.includes(refreshToken))
        return res.status(403).json({
          success: false,
          message: "Refresh token is not valid",
        });
      refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
      const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY);
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
        authController.generateToken(decoded);
      refreshTokens.push(newRefreshToken);
      res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        path: "/",
        sameSite: "strict",
        secure: false,
      });
      return res.status(200).json({ accessToken: newAccessToken });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  logOutUser: async (req, res) => {
    refreshTokens = refreshTokens.filter(
      (token) => token !== req.cookies.refreshToken
    );
    res.clearCookie("refreshToken");
    return res.status(200).json("Logout successfully");
  },
};

module.exports = authController;

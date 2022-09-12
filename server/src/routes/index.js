const authRouter = require("./auth");
const userRouter = require("./user");
const postRouter = require("./post");

const routes = (app) => {
  app.use("/v1/auth/", authRouter);
  app.use("/v1/user", userRouter);
  app.use("/v1/posts", postRouter);
};

module.exports = routes;

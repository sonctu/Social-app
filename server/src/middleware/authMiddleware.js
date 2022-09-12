const jwt = require("jsonwebtoken");

const authMiddleware = {
  verifyToken: (req, res, next) => {
    const token = req.headers["token"] || req.body.token || req.query.token;
    if (!token) {
      return res.status(403).json("A token is required for authentication");
    }
    const accessToken = token.split(" ")[1];
    try {
      const decoded = jwt.verify(accessToken, process.env.JWT_ACCESS_KEY);
      req.user = decoded;
      next();
    } catch (err) {
      return res.status(401).send("Invalid Token");
    }
  },
};

module.exports = authMiddleware;

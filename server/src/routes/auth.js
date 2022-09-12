const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = require("express").Router();

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.post("/refresh", authController.refreshToken);
router.post("/logout", authMiddleware.verifyToken, authController.logOutUser);

module.exports = router;

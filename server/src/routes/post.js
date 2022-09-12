const postController = require("../controllers/postController");
const authMiddleware = require("../middleware/authMiddleware");

const router = require("express").Router();

router.post("/", authMiddleware.verifyToken, postController.createNewPost);
router.patch("/:id", authMiddleware.verifyToken, postController.updatePost);
router.delete("/:id", authMiddleware.verifyToken, postController.deletePost);

module.exports = router;

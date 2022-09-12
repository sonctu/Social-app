const Post = require("../models/Post");

const postController = {
  createNewPost: async (req, res) => {
    try {
      const { desc, imageUrl } = req.body;
      const user = req.user;
      const newPost = new Post({
        userId: user.id,
        desc,
        imageUrl,
      });
      const postData = await newPost.save();

      return res.status(200).json(postData);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  updatePost: async (req, res) => {
    try {
      const id = req.params.id;
      const { desc, imageUrl } = req.body;
      const post = await Post.findById(id);
      if (post.userId == req.user.id || req.user.admin) {
        const updatedPost = await post.updateOne(
          { $set: { desc, imageUrl } },
          { new: true }
        );
        return res.status(200).json(updatedPost);
      } else return res.status(403).json(`You can update only your post `);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  deletePost: async (req, res) => {
    try {
      const id = req.params.id;
      const post = await Post.findById(id);
      if (post.userId == req.user.id || req.user.admin) {
        return res.status(200).json({
          success: true,
          data: post,
          message: "Delete post successfully",
        });
      } else return res.status(403).json("You can delete only your post");
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = postController;

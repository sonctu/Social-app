const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    desc: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    likes: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", Post);

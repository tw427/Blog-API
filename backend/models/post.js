const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  // comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  // postedBy: { type: Schema.Types.ObjectId, ref: "User" },
  published: { type: Boolean, default: false },
});

module.exports = mongoose.model("Post", PostSchema);

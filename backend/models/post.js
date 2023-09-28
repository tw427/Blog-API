const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  comments: [{ type: Object, required: true }],
  published: { type: Boolean, default: false },
});

module.exports = mongoose.model("Post", PostSchema);

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  author: { type: String, required: true },
  comment: { type: String, required: true },
  post: { type: String, required: true },
  time: { type: Date, default: new Date().toLocaleDateString() },
});

module.exports = mongoose.model("Comment", CommentSchema);

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  message: { type: String, required: true },
  postedBy: { type: Schema.Types.ObjectId, ref: "User" },
  time: { type: Date, default: new Date().toLocaleDateString() },
});

module.exports = mongoose.model("User", CommentSchema);

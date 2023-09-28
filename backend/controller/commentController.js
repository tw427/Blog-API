const Comment = require("../models/comment");
const Post = require("../models/post");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

// Get a list of Comments
// exports.comment_list_get = asyncHandler(async (req, res, next) => {
//   const allComments = await Comment.find({}).exec();

//   return res.json(allComments);
// });

// Create a Comment
exports.comment_create_post = [
  body("author", "Author required").trim().isLength({ min: 2 }).escape(),
  body("comment", "Comment required").trim().isLength({ min: 1 }),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const currPost = await Post.findOne({ _id: req.params.postId }).exec();

    const comment = new Comment({
      author: req.body.author,
      comment: req.body.comment,
      post: req.params.postId,
    });

    if (!errors.isEmpty()) {
      console.log(errors.array());
    } else {
      await comment.save();
      const updatedPost = new Post({
        title: currPost.title,
        body: currPost.body,
        comments: [...currPost.comments, comment],
        _id: req.params.postId,
      });
      await Post.findByIdAndUpdate(req.params.postId, updatedPost, {});
      res.status(200).json({ message: "Comment successfully added to post!" });
    }
  }),
];

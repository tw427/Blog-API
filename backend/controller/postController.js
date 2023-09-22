const Post = require("../models/post");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

// Get a list of Posts
exports.post_list_get = asyncHandler(async (req, res, next) => {
  const allPosts = await Post.find({}).exec();

  return res.json(allPosts);
});

// Create a post
exports.post_create_post = [
  body("postTitle", "Post title required!")
    .trim()
    .isLength({ min: 2 })
    .escape(),
  body("postBody", "Post body / message required!").trim().isLength({ min: 2 }),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const post = new Post({
      title: req.body.postTitle,
      body: req.body.postBody,
    });

    if (!errors.isEmpty()) {
      console.log(errors.array());
    } else {
      await post.save();
      res.status(200).json();
    }
  }),
];

// Delete a post
exports.post_delete_post = asyncHandler(async (req, res, next) => {
  await Post.findByIdAndRemove(req.params.postId);
  return res.status(200).json({ message: "Post removed success!" });
});

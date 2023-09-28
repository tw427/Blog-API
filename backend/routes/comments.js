const express = require("express");
const router = express.Router();
const comment_controller = require("../controller/commentController");

// // Create comment
router.post("/create/:postId", comment_controller.comment_create_post);

// // Delete comment
// router.post("/delete/:commentId", {});

// // Get list of comments for post
// router.get("/list/:postId", comment_controller.comment_list_get);

module.exports = router;

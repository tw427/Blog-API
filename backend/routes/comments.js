const express = require("express");
const router = express.Router();
const comment_controller = require("../controller/commentController");

// // Create comment
router.post("/create/:postId", comment_controller.comments_create_post);

// // Delete comment
// router.post("/delete/:commentId", {});

// // Get list of comments
// router.get("/list", {});

module.exports = router;

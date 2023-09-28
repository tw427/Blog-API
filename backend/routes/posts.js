const express = require("express");
const router = express.Router();
const post_controller = require("../controller/postController");

// // Create post
router.post("/create", post_controller.post_create_post);

// Delete post
router.post("/delete/:postId", post_controller.post_delete_post);

// // Update post
router.post("/update/:postId", post_controller.post_update_post);

// Get list of posts
router.get("/list", post_controller.post_list_get);

module.exports = router;

const express = require("express");
const router = express.Router();
const post_controller = require("../controller/postController");

// // Create post
router.post("/create", post_controller.post_create_post);

// // Delete post
// router.get("/delete/:postId", {});
// router.post("/delete/:postId", {});

// // Update post
// router.get("/update/:postId", {});
// router.post("/update/:postId", {});

// // Get a single post
// router.get("/:postId", {});
// router.post("/:postId", {});

// Get list of posts
router.get("/list", post_controller.post_list_get);
// router.post("/list", {});

module.exports = router;

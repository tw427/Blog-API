const express = require("express");
const router = express.Router();

// Create post
router.get("/create", {});
router.post("/create", {});

// Delete post
router.get("/delete/:postId", {});
router.post("/delete/:postId", {});

// Update post
router.get("/update/:postId", {});
router.post("/update/:postId", {});

// Get a single post
router.get("/:postId", {});
router.post("/:postId", {});

// Get list of posts
router.get("/list", {});
router.post("/list", {});

module.exports = router;

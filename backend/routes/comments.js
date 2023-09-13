const express = require("express");
const router = express.Router();

// Create comment
router.get("/create", {});
router.post("/create", {});

// Delete comment
router.get("/delete/:commentId", {});
router.post("/delete/:commentId", {});

// Update comment
router.get("/update/:commentId", {});
router.post("/update/:commentId", {});

// Get list of comments
router.get("/list", {});
router.post("/list", {});

module.exports = router;

const express = require("express");
const router = express.Router();

// Create User
router.get("/sign-up", ADD.CONTROLLER);
router.post("/sign-up", ADD.CONTROLLER);

// Delete User
router.get("/delete/:userId", ADD.CONTROLLER);
router.post("/delete/:userId", ADD.CONTROLLER);

// Update User
router.get("/update/:userId", ADD.CONTROLLER);
router.post("/update/:userId", ADD.CONTROLLER);

// Get a list of Users
router.get("/list", ADD.CONTROLLER);
router.post("/list", ADD.CONTROLLER);

module.exports = router;

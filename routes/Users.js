const express = require("express");
const router = express.Router()

const {registerUser,profileUser} = require('../controllers/Users');
const isAuthenticatedUser = require("../middlewares/auth");

// router.get("/", userController.getAllUser);

router.post("/register",registerUser);

router.get("/profile", isAuthenticatedUser,profileUser);

// router.put("/",  userController.putUser);

// router.delete("/",  userController.deleteUser);

module.exports = router;

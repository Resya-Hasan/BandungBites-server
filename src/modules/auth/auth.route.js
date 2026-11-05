const express = require("express");
const router = express.Router();
const AuthController = require("./auth.controller");
const authenticationMiddleware = require("../../middlewares/authentication");

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/refresh", AuthController.refresh);
router.post("/logout", AuthController.logout);
router.get("/me", authenticationMiddleware, AuthController.getMe);

module.exports = router;
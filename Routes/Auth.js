const express = require("express");
const authRouter = express.Router();
const { loginHandler, registerHandler } = require("../Controllers/Auth");

authRouter.route("/login").post(loginHandler);
authRouter.route("/register").post(registerHandler);
module.exports = authRouter;

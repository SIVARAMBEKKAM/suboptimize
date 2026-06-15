const express = require("express");
const router = express.Router();

const register = require("./register");
const login = require("./login");
const googleLogin = require("./googlelogin");

router.post("/register", register);

router.post("/login", login);

router.post("/google", googleLogin);

module.exports = router;
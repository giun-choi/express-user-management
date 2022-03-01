"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./user.ctrl");

router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

module.exports = router;

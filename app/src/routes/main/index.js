"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./main.ctrl");

router.get("/", ctrl.output.main);

module.exports = router;

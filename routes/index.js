var express = require("express");
var router = express.Router();

var download = require("../modules/download.js");


//routes
router.post("/start", download.start)


module.exports = router;

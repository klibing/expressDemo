/**
 *
 * Created by libing on 2016/10/26.
 */
var express = require("express");
var mysql = require("../db/db.js");
//引入cache
var cache = require("./cache");
var router = express.Router();

router.post("/", function (req, res, next) {
    console.log(req.param("username"));
    var cluster = new Cluster();
    cluster.set("123456", "aasdasda", function () {
        res.redirect("/mytable/list");
    });
});

module.exports = router;
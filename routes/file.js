/**
 * Created by libing on 2016/10/21.
 */

var express = require("express");

var router = express.Router();

router.get("/list", function (request, response, next) {
    response.render("file", {title: "文件列表"});
});

module.exports = router;
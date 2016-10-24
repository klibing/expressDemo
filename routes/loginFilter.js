/**
 * Created by libing on 2016/10/24.
 */
var express = require("express");
var url = require("url");
var router = express.Router();

router.get("**", function(request, response, next){
    console.log("进入filter");
    var pathname = url.parse(request.url).pathname;
    console.log("过滤器访问了路径:" + pathname);
});

module.exports = router;
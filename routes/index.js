var express = require('express');
var url = require("url");
var router = express.Router();
//引入cache
var cache = require("./cache");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '跳转到首页' });
});

router.get("/*", function(request, response, next){
  var pathname = url.parse(request.url).pathname;
  console.log("过滤器访问了路径:" + pathname);
  var cluster = new Cluster();
/*  cluster.set("123456", "aasdasda", function () {
     console.log("OK");
  });*/
  cluster.get("123456", function (err, res) {
    console.log(res);
    if(null == res) {
      response.render('index', { title: '跳转到首页' });
      return;
    } else {
      next();
    }
  });
});

module.exports = router;

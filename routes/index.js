var express = require('express');
var url = require("url");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/*", function(request, response, next){
  var pathname = url.parse(request.url).pathname;
  console.log("过滤器访问了路径:" + pathname);
  next();
});

module.exports = router;

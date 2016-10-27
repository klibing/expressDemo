/**
 * Created by libing on 2016/10/25.
 */
var express = require('express');
var session = require('express-session'); //如果要使用session，需要单独包含这个模块
var cookieParser = require('cookie-parser'); //如果要使用cookie，需要显式包含这个模块
var RedisStore = require('connect-redis')(session);
var User = require("../repository/user");
var crypto = require("crypto");
var cluster = require("../routes/cache")(Cluster);

var app = express();

// 设置 Cookie
app.use(cookieParser());

// 设置 Session
app.use(session({
    store: new RedisStore({client:cluster}),//此段非常重要，解决redis集群存储共享session
    resave: true, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret:"love"
}));


app.get("/", function(req, res, next) {
    //console.log(cookieParser);  //装了n多次，没有把调试工具下载弄好，实在悲哀，
/*    var user = {
        "username":"张三",
        "age":"3",
        "sex":"男"
    };*/
 var password = crypto.createHash("md5").update("123456").digest("base64");
    var newUser = new User({
        username:"libing",
        password:password
    });
    /*if(!session.user_id) {
        console.log("没有session");
        session.user_id = "22133";
    }*/
   //req.session.user = newUser;
    res.send('hello, session id:' + req.sessionID + ' count:' + 0 + "session:" + req.session.user);
    next();
});
app.use(function (req, res, next) {
    if (!req.session) {
        return next(new Error('oh no')) // handle error
    }
    next(); // otherwise continue
})

app.listen(3000);

console.log('Web server has started on http://127.0.0.1:3000/');
var Redis = require("ioredis");
var cache = require("../config/config");
var cluster = require("../routes/cache")(Cluster);


cluster.on("ready", function (res) {
    console.log("ready");
});
var user = {};
user.id="123456";
user.name = "李冰";
user.message = "asdassfa";
console.log(user);
//var user = "李冰";
//cluster.expire("123456", 20);//设置过期时间
/*cluster.set("123456", JSON.stringify(user), function (err, res) {
    console.log("OK");
});*/
cluster.get('123456', function (err, res) {
    res = JSON.parse(res);
    console.log(res.name);
});
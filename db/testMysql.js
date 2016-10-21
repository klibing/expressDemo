/**
 * Created by libing on 2016/10/21.
 */

var mysql = require("./db.js");

mysql.query("insert into mytable(firstname, lastname, message) values('王', '月', '111个人信息'),('张', '三', 'as大是大非的流口水的福克斯')", function (results) {
    if(results && results.length > 0) {
        for(var i=0;i<results.length;i++) {
            var result = results[i];
            console.log("first name:" + result["firstname"]);
            console.log("last name:" + result["lastname"]);
            console.log("message:" + result["message"]);
        }
    }
});
/**
 * Created by libing on 2016/10/21.
 */

var mysql = require("./db.js");

mysql.query("select * from mytable", function (results) {
   if(results && results.length > 0) {
       for(var i=0;i<results.length;i++) {
           var result = results[i];
           console.log("first name:" + result["firstname"]);
           console.log("last name:" + result["lastname"]);
           console.log("message:" + result["message"]);
       }
   }
});
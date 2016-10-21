/**
 * Created by libing on 2016/10/21.
 */
var express = require("express");
var mysql = require("../db/db.js");
var router = express.Router();

router.get("/list", function(request, response, next) {
    //查询

    mysql.query("select * from mytable", function (results) {
        if(results && results.length > 0) {
            for(var i=0;i<results.length;i++) {
                var result = results[i];
                console.log("first name:" + result["firstname"]);
                console.log("last name:" + result["lastname"]);
                console.log("message:" + result["message"]);
            }
        }

        //response.render("mytable", {"rows" : JSON.stringify(results)});
        response.render("mytable", {"rows" : results});
        //response.end(JSON.stringify({"rows" : results}));

    });
});

module.exports = router;
/**
 * mysql链接
 * Created by libing on 2016/10/21.
 */
var mysql = require("mysql");
var db = {};
db.query = function sqlback(sqllan, fn) {
    var connection = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"123456",
        database:"node",
        port:3306
    });

    connection.connect(function (error) {
        if(error) {
            console.log("connection Error:" + error.message);
            return;
        }
    });
    var sql = sqllan;
    if(!sql) {
        return;
    }

    connection.query(sql, function (error, rows, fields) {
       if(error) {
           console.log("query Error:" + error.message);
           return;
       }
       fn(rows);
    });

    connection.end(function (error) {
        if(error) {
            return;
        } else {
            console.log("链接已关闭");
        }

    });
}
module.exports = db;
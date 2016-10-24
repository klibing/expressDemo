/**
 * mysql链接
 * Created by libing on 2016/10/21.
 */
var mysql = require("mysql");
var db = {};
var connection = null;
//启动链接
function staticConnection() {
    connection = mysql.createConnection({
        host:"192.168.92.175",
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
}
//关闭链接
function closeConnection() {
    connection.end(function (error) {
        if(error) {
            return;
        } else {
            console.log("链接已关闭");
        }

    });
}
//sql执行
db.query = function sqlback(sqllan, fn) {
    staticConnection();

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

    closeConnection();
}
//分页查询
db.pageList = function(sql, page, rows, fn) {
    var pageListSql = "select * from (" + sql + ") limit  "
}

function pageTool() {

}
module.exports = db;
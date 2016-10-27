/**
 * Created by libing on 2016/10/27.
 */
var mysql = require("../db/db");

function User(user) {
    this.username = user.username;
    this.password = user.password;
}

module.exports = User;

User.prototype.save = function save(callback) {
    var sql = "insert into user(username, password) value("+this.username+", "+this.password+")";
    db.query(sql, callback(result));
}

User.get = function getByUsername(callback) {
    var sql = "select * from user u where u.username = " + this.username;
    db.query(sql, callBack(result));
}

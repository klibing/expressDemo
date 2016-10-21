/**
 * Created by libing on 2016/10/21.
 */

var mysql = require("./db.js");

// 清空表数据
console.log("正在清空表...")
mysql.query("delete from mytable", function (results) {
    console.log(results);
    console.log("数据清理完成")
});

console.log("初始化表数据...");
mysql.query("insert into mytable(lastname, firstname, message) values" +
    "('王', '月', '111个人信息')," +
    "('李', '冰', 'sad空间哈萨科罚金')," +
    "('李', '冰', 'sad空间哈萨科罚金')," +
    "('李', '冰', 'sad空间哈萨科罚金')," +
    "('李', '冰', 'sad空间哈萨科罚金')," +
    "('李', '冰', 'sad空间哈萨科罚金')," +
    "('李', '冰', 'sad空间哈萨科罚金')," +
    "('李', '冰', 'sad空间哈萨科罚金')," +
    "('李', '冰', 'sad空间哈萨科罚金')," +
    "('李', '冰', 'sad空间哈萨科罚金')," +
    "('张', '三', 'as大是大非的流口水的福克斯')", function (results) {
    if(results && results.length > 0) {
        for(var i=0;i<results.length;i++) {
            var result = results[i];
            console.log("first name:" + result["firstname"]);
            console.log("last name:" + result["lastname"]);
            console.log("message:" + result["message"]);
        }
    }
    console.log("数据初始化完成。")
});
/**
 * express & mysql npm install 필요
 */

const mysql = require('mysql');

//DB 접속을 위한 정보
const dbInfo = {
    host: 'localhost',
    user: 'root',
    password: '1111',
    port: '3306',
    database: 'ang2'
};
//DB 연결(접속)
var connection = mysql.createConnection(dbInfo);
console.log('디비 접속 시작');
connection.connect();

console.log('user_info select');
var id = 'test1';
var pwd = '1';
var sql = "select * from user_info";
sql += " where userid = ? and userpwd=?";
var values = [id, pwd];
connection.query(sql, values, function(err, rows, fields) {
    if(!err) {
        console.log(rows);
    } else {
        console.log(err);
    }
});

sql = "SELECT ui.*, uh.userdata";
sql += " FROM user_info as ui, user_his as uh";
sql += " WHERE ui.userNo = uh.userno;";

var printRows = function(rows) {
    if(rows.length == 0) {
        console.log("검색된 데이터가 없습니다.");
    } else {
        for(var key in rows) {
            var row = rows[key];
            for(var col in row) {
                console.log("컬럼명 : " + col);
                console.log("데이터 : " + row[col]);
            }
        }
    }
};
connection.query(sql, function(err, rows, fields) {
    if(!err) {
        // console.log(rows);
        printRows(rows);
    } else {
        console.log(err);
    }
});

console.log("디비 접속 종료");
connection.end();
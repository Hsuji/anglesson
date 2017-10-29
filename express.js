/**
 * express & mysql npm install 필요
 */

//해당 폴더에 설치되어 있는 express모듈을 가져옴.
const express = require('express');
const port = 80;
const mysql = require('mysql');
//db 정보 가져옴
const dbInfo = require('./db_info.js');
const bdParser = require('body-parser');

var con = mysql.createConnection(dbInfo);

var expApp = express();
expApp.set('port', port);
expApp.use(bdParser.urlencoded({extended: false}));
expApp.use(bdParser.json());

expApp.get('/', function(req, res) {
    var id = req.query.id;
    console.log(id + '를 요청하셨군요');
    res.send(`안녕하세요 ${id} 님`);
});

expApp.get('/test', function (req, res) {
    res.send('나에게 테스트를 주었구낰');
});

//db 연결 
/* expApp.get('/user', function(req, res) {
    con.query('select * from user_info', function(err, rows) {
        if(err) throw err;
        console.log(rows);
        var resText = "";
        for(var key in rows) {
            var row = rows[key];
            resText += "<div>";
            for(var col in row) {
                resText += "<p>"+col + ":" + row[col]+"</p>";
            }
            resText += "</div></br>";
        }
        res.send(resText);
    });
}); */

var urlForUserSerach = "/user";
var funForUserList = function(req, res) {
    var userId = req.query.id;
    var userPwd = req.query.pwd;
    if(!userId) {
        // resText = "유저 아이디를 입력해주세요!";
        res.send("유저 아이디를 입력해주세요!");
    } else if(!userPwd){
        // resText = "비밀번호를 입력해주세요!";
        res.send("비밀번호를 입력해주세요!");
    } else {
        var sql = "select * from user_info where userId=?";
        var values = [userId];
        var resText = "";
        con.query(sql, values, function(err, rows) {
            if(err) throw err;
            if(rows.length == 0) {
                resText = `입력하신 Id : ${userId}`;
                resText += `와 일치하는 id가 없습니다.`;
            } else {
                if(userPwd != rows[0].userPwd) {
                    resText = "입력하신 비밀번호가 틀렸습니다.";
                } else {
                    resText += userId + "님 환영합니다.";
                }
            }
            res.send(resText);
        });
    }
};
expApp.get(urlForUserSerach, funForUserList);
expApp.post(urlForUserSerach, funForUserList);

expApp.listen(expApp.get('port'));
//express
const express = require('express');
const app = express();
//中间件
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));// for parsing application/json
app.use(bodyParser.json()); // for parsing application/x-www-form-urlencoded

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//设置监听80端口
app.listen(80, function () {
    console.log('listen *:80');
});


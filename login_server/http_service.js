var express = require("express")
var http = require('../utils/http')
http.init(console,"Test")
var app = express();
var error_code= require('../config/error_code').error_code



exports.start = function(config){

    app.listen(config.PORT,config.IP)
    console.log("http service start at %s:%s",config.PORT,config.IP)
}

//设置跨域访问
app.all('*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

app.get("/who",function(req,res){
    //TODO:
    //client => key
    //server => key
    //secret =>
    var client_key = req.query.key;
    var my_pub_key = 'xxxxxxxxx';
    var my_pri_key = "ddddddddddddddd";

    //client_key + my_pri_key
    var secret = "xxxxxxxxxxxxxxxxx";

    var challenge = "xxxxxxxxxxxxxxxxxxxxxxxxx";
    var back_data ={
        key:my_pub_key,
        challenge:challenge
    }
    
    http.send(res,error_code.SUCCESS,'OK.',back_data)
});

app.get('/handshake',function(req,res){
    //TODO:
    //hamc
    
});

app.get('/login',function(req,res){
    //user_name
    //passward

    //TODO 检测用户

    //回复
});
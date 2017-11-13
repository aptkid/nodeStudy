var http = require('http');
var fs = require('fs');
var callback = function(req,res){
    // console.info(req.headers);//获取请求头
    // console.log("URL"+req.url);//获取URL
    // console.log(req.method);//获取请求方式
    if(req.url == '/'){
        res.setHeader('Content-Type','Text/HTML;charset=utf-8');//设置响应头
        fs.readFile('./static/html/index.html',function(err,data){
            res.write(data);
            res.end();
        });
    } else if(req.url == '/static/css/index.css'){
        res.setHeader('Content-Type',"Text/CSS;charset=utf-8");
        fs.readFile('./static/css/index.css',function(err,data){
            res.write(data);
            res.end();
        });
    } else if(req.url == '/static/js/index.js'){
        res.setHeader('Content-Type','Application/X-JavaScript');
        fs.readFile('./static/js/index.js',function(err,data){
            res.write(data);
            res.end();
        });
    }

    // res.write(new Date().toString());//写响应体
    // res.statusCode = 404;//设置状态码
    // res.send(new Date().toString());//send好像不能用
    
};


//每当有请求来的时候，调用callback函数。对该请求进行响应
var server = http.createServer(callback);
//监听本机的80端口
server.listen(80);

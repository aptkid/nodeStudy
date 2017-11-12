var http = require('http');
var callback = function(req,res){
    console.info(req.headers);//获取请求头
    console.log("URL"+req.url);//获取URL
    console.log(req.method);//获取请求方式
    res.setHeader('Content-Type','Text/HTML;charset=utf-8');//设置响应头
    res.write(new Date().toString());//写响应体
    res.statusCode = 404;//设置状态码
    // res.send(new Date().toString());//send好像不能用
    res.end();
};
//每当有请求来的时候，调用callback函数。对该请求进行响应
var server = http.createServer(callback);
//监听本机的80端口
server.listen(80);

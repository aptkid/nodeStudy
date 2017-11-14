var http = require('http');
var utils = require('./utils');
var urlss = require('url');

var callback = function(req,res){
    var urlObj = urlss.parse(req.url);
    var pathname = urlObj.pathname;
    console.log(urlObj,pathname,urlObj.query.username,urlObj.query.password);
    if(pathname == '/'){
        utils.static(res,'/static/html/index.html');
        return;
    }
    if(pathname == '/favicon.ico'){
        return;
    }
    utils.static(res,pathname);
};
//每当有请求来的时候，调用callback函数。对该请求进行响应  监听本机的80端口
http.createServer(callback).listen(80);


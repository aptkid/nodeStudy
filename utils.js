
var fs = require('fs');
var arr = null;
/**
 * 
 * @param {*} url 
 * @returns 返回Content类型
 */
function getContentType(url){
    arr = url.split('.');
    if(arr[1] == 'html'){
        arr = null;
        return 'Text/HTML;charset=utf-8';
    } else if(arr[1] == 'css'){
        arr = null;
        return 'Text/CSS;charset=utf-8';
    } else if(arr[1] == 'js'){
        arr = null;
        return 'Application/X-JavaScript;charset=utf-8';
    } else if(arr[1] == 'img'){
        arr = null;
        return 'Application/X-img';
    } else if(arr[1] == 'gif'){
        arr = null;
        return 'image/gif';
    } else if(arr[1] == 'jpg'){
        arr = null;
        return 'image/jpg';
    } else if(arr[1] == 'png'){
        arr = null;
        return 'image/png';
    } else {
        arr = null;
        return 'Text/html;charset=utf-8';
    }
}
/**
 * 
 * @param {*} response 响应
 * @param {*} path 文件路径
 * @param {*} Type Content类型
 */
var static = function static(response,path){
    response.setHeader('Content-Type',getContentType(path));
    console.log('.'+path);
    fs.readFile('.'+path,function(err,data){
        response.write(data);
        response.end();
    });
}
exports.static = static;
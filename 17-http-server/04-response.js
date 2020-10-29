#!/usr/bin/env node

const http=require('http');
const html=`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>登陆页面</title>
  </head>
  <body>
  <form action="">
    <lable>用户名:</lable>
    <input type="text" name='username'>
    <br>
    <lable>密码:</lable>
    <input type="password" name='password'>
    <br>
    <input type="button" value='登录'>
    <br>
  </form>
  </body>
  </html>`;
http.createServer((req,res)=>{
  //status code
  //header,txt/html
  //
  if(req.url!=='/'){
    res.statusCode=404;
    res.setHeader('content-type','text/html');
    res.end('<h1>Not found</h1>');
    return;
  }
  res.writeHead(200,{
    'content-type':'text/html',
    'content-length':Buffer.byteLength(html)

  });

  res.end(html);
}).listen(8080);

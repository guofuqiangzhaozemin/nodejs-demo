#!/usr/bin/env node

const http=require('http');
http.createServer((req,res)=>{
  if(req.url!=='/'){
    res.statusCode=404;
    res.setHeader('content-type','text/html');
    res.end('<h1>Not found</h1>');
    return;
  }
  req.pipe(process.stdout);

  res.end('ok');
}).listen(8080);

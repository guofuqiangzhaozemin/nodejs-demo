#!/usr/bin/env node

const http=require('http'),
      log=console.log;
http.createServer((req,res)=>{
  log(req.headers);
  /*
  log(req.headers.host);
  log(req.headers['user-agent']);
  */
  res.end('ok');

}).listen(8080);

#!/usr/bin/env node

const http=require('http'),
      url=require('url'),
      qs=require('querystring'),
      log=console.log;
http.createServer((req,res)=>{
  log(req.url);
  //get pathname and query string
  let addr=url.parse(req.url);
  log(addr.pathname);
  log(addr.query);
  
  log(addr.pathname.split('/'));
  log(qs.parse(addr.query));
  res.end('ok');

}).listen(8080);

#!/usr/bin/node

const http=require('http'),
      log=console.log;
http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  req.pipe(process.stdout);
  res.end('ok');
}).listen(8080);

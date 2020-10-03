#!/usr/bin/node

const http=require('http'),
      log=console.log,
      fs=require('fs');


http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);

  log(req.headers);
  log(process.pid);
  log();
  let fileName =__dirname+req.url,
      fileData=fs.readFileSync(fileName);
  res.end(fileData);
}).listen(8080);

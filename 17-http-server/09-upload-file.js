#!/usr/bin/env node

const http=require('http'),
      fs=require('fs');

http.createServer((req,res)=>{
  if(req.url!=='/'){
    res.statusCode=404;
    res.setHeader('content-type','text/html');
    res.end('<h1>Not found</h1>');
    return;
  }
  let data='';
  req.setEncoding('binary');
  req.on('data',chunk=>data+=chunk);
  req.on('end',()=>{
    data=data.split('\r\n');
    let filename=data[1].split(';')[2].split('=')[1];
    filename=filename.slice(1,filename.length-1);
    data=data[4];

    fs.writeFileSync(filename,data,'binary');
    res.end('ok');

  });


}).listen(8080);

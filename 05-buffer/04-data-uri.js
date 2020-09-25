#!/usr/bin/node

const log=console.log,
fs=require('fs'),
http=require('http'),
pic=process.argv[2];

let data=fs.readFileSync(pic);

let uri=data.toString('base64');


//log(`uri:${uri}\n`);

let html=`<html><head><title>data uri</title></head><body><img src= "data:image/jpg;base64,${uri}"></body></html>`;

http.createServer((req,res)=>{
   res.end(html);
}).listen(8080);

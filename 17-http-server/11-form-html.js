#!/usr/bin/env node

const http=require('http'),
      fs=require('fs'),
      qs=require('querystring');

let items=[];
function genPage(){
  let html=fs.readFileSync('./template.html').toString('utf8');
  let dom=items.map(i=>'<li>'+i+'</li>').join('\n');
  html=html.replace('%',dom);
  return html;
}
http.createServer((req,res)=>{
  if(req.url!=='/'){
    res.statusCode=404;
    res.setHeader('content-type','text/html');
    res.end('<h1>Not found</h1>');
    return;
  }
  let data='';
  req.on('data',chunk=>data+=chunk);
  req.on('end',()=>{
    let item = qs.parse(data).item;
    if(item!==''&&typeof item !=='undefined'){
      items.push(item);
    }
  
    res.writeHead(200,{
      'content-type':'text/html',
      'content-length':Buffer.byteLength(genPage())

    });
    res.end(genPage());

  });


}).listen(8080);

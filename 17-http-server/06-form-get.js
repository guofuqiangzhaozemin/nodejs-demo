#!/usr/bin/env node

const http=require('http'),
      url=require('url'),
      qs=require('querystring');

let items=[];
function genPage(){
  let dom =(items.length===0)?'':items.map(i=>'<li>'+i+'</li>').join('\n');
  let html=`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Todo List</title>
    </head>
    <body>
    <h1>Todo List</h1>
    <form method="GET" action="http://192.168.142.144:8080">
      <input type="text" name='item'>
      <input type="submit" value='submit'>
    </form>
    <ul id="items">
      ${dom}    
    </ul>
    </body>
    </html>`;
  return html;
}
http.createServer((req,res)=>{
  let addr=url.parse(req.url);
  if(addr.pathname!=='/'){
    res.statusCode=404;
    res.setHeader('content-type','text/html');
    res.end('<h1>Not found</h1>');
    return;
  }
  let item=qs.parse(addr.query).item;
  if(item!==''&&typeof item !=='undefined'){
    items.push(item);
  }
  res.writeHead(200,{
    'content-type':'text/html',
    'content-length':Buffer.byteLength(genPage())

  });

  res.end(genPage());
}).listen(8080);

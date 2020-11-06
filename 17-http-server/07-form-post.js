#!/usr/bin/env node

const http=require('http'),
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
    <form method="POST" action="http://192.168.142.144:8080">
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

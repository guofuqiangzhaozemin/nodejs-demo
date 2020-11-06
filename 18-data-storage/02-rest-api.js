#!/usr/bin/env node

const http=require('http'),
      log=console.log,
      fs=require('fs'),
      qs=require('querystring');

let items=loadItems();

process.on('SIGINT',()=>{
  saveItems;
})

function loadItems(){
  log('loadItems');
  try{
    let items=fs.readFileSync('./12-items.txt').toString('utf8');
    items=JSON.parse(items);
    return items;

  }catch(e){
    return [];

  }
}
function saveItems(){
  log('saveItems');
  fs.writeFileSync('./12-items.txt',JSON.stringify(items));
}
http.createServer((req,res)=>{
  logRequest(req);
  if(req.url.slice(0,5)!=='/todo'){
    let html=fs.readFileSync('./12-todo.html').toString('utf8');
    if(req.url==='/'){
      res.end(html);

    }else if(req.url=='/12-todo.js'){
      fs.createReadStream('./12-todo.js').pipe(res);
    }else{
      res.end('not api request and not page request');
    }
    return;
  }
}).listen(8080);

function logRequest(req){
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log();
}

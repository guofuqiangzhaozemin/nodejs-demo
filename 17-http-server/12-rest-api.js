#!/usr/bin/env node

const http=require('http'),
      log=console.log,
      fs=require('fs'),
      qs=require('querystring');

let items=[],
    result={
      status:200,
      reason:'ok',
    };
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
  switch(req.method){

    case 'GET':
      select(req,res);
      break;

    case 'POST':
      insert(req,res);
      break;

    case 'PUT':
      update(req,res);
      break;

    case 'DELETE':
      remove(req,res);
      break;

    default:
      res.end(`${req.method} method`);
      break;
         
  }
}).listen(8080);

function select(req,res){
  result.data=items;
  res.end(JSON.stringify(result));
}

function insert(req,res){
  let data='';

  req.on('data',chunck=>data+=chunck);
  req.on('end',()=>{
    let item=qs.parse(data).item;
    if(item!=='' &&typeof item!==undefined){
      items.push(item);
      res.end(JSON.stringify(result));
    }else{
      result.status=402;
      result.reason='item is empty';
      res.end(JSON.stringify(result));
    }
  });
}

function update(req,res){
  let id=req.url.split(':')[1];
  let data='';
  req.on('data',chunck=>data+=chunck);
  req.on('end',()=>{
    let item=qs.parse(data).item;
    if(item!==''&&typeof item !=undefined){
      items[id]=item;
      res.end(result);
    }else{
      result.status=401;
      result.reason='item is empty';
      res.end(JSON.stringify(result));
    }
  });

}

function remove(req,res){
  let id=req.url.split(':')[1];
  if(typeof id===undefined){
    items=[];
    result.status=200;
    result.reason='delete all success';
    res.end(JSON.stringify(result));
    return;
  }
  items=items.splice(id,1);
  result.status=200;
  result.reason='del success';
  res.end(JSON.stringify(result));

}



function logRequest(req){
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log();
}

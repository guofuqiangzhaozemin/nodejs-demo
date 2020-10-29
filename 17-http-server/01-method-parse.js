#!/usr/bin/env node

const http=require('http');
http.createServer((req,res)=>{

  switch(req.method){

    case 'GET':
      res.end('get method');
      break;

    case 'POST':
      res.end('post method');
      break;

    case 'PUT':
      res.end('put method');
      break;

    case 'DELETE':
      res.end('delete method');
      break;

    default:
      res.end(`${req.method} method`);
      break;
         
  }
}).listen(8080);

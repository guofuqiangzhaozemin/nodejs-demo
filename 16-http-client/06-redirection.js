#!/usr/bin/env node

const http = require('http'),
      log = console.log,
      url = require('url'),
      addr='http://www.sian.com/';


let opt=(ad)=>{

  let p = url.parse(ad);
  p.headers={
    'user-agent':'curl/7.29.0'
  };
  return p;
};
get(addr);

function get(ad){

  http.get(opt(ad),(res)=>{

    log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage} `);

    log(res.headers);
    log();
    if(res.statusCode>300&&res.statusCode<400){
      get(res.headers.location);
    }else{
      res.pipe(process.stdout);
    }
  });
}



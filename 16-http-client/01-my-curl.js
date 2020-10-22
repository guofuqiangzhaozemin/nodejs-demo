#!/usr/bin/env node

const http = require('http'),
      log = console.log,
      //url = require('url'),
      addr = process.argv[2];


http.get(addr,(res)=>{
  //print response start line
  //HTTP/1.1 200 ok
  log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage} `);

  log(res.headers);

  res.pipe(process.stdout);

});


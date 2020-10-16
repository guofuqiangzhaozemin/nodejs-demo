#!/usr/bin/env node

const http = require('http'),
      cp   = require('child_process');

http.createServer((req,res)=>{
  let child = cp.spawn('./03-child.js');
  child.stdout.pipe(res);

}).listen(8080);


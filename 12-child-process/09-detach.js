#!/usr/bin/env node

const cp  = require('child_process');

let child = cp.spawn('./03-child.js',[],{detach:true,stdio:['ignore',1,2]});

//child.stdout.pipe(process.stdout);

child.unref();

console.log(`I m father Process:${process.pid}`);

setTimeout(()=>{
  console.log('GoodBye!');
  process.exit();
},5000);


#!/usr/bin/env node

const cp  = require('child_process');

cp.fork('./03-child.js');

setTimeout(()=>{
  console.log('GoodBye!');
  process.exit();
},5000);



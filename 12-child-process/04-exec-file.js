#!/usr/bin/env node

const cp  = require('child_process');

cp.execFile('./03-child.js',[],(err,stdout)=>{
  console.log(stdout.toString('utf8'));
});

//./01-exec-file.js cmd args

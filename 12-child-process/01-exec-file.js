#!/usr/bin/env node

const cp  = require('child_process'),
      cmd = process.argv[2],
      args=process.argv.slice(3,process.argv.length);

cp.execFile(cmd,args,(err,stdout)=>{
  console.log(stdout.toString('utf8'));
});

//./01-exec-file.js cmd args

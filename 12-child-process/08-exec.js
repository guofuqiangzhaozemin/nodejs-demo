#!/usr/bin/env node

const cp  = require('child_process'),
      cmd = process.argv[2];

cp.exec(cmd,(err,stdout)=>{
  console.log(stdout.toString('utf8'));
});


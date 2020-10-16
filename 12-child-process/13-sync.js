#!/usr/bin/env node

const cp  = require('child_process');


cp.spawnSync('cat',['01-exec-file.js'],{stdio:['ignore',1,2]});

console.log(`I am father Process:${process.pid}`);



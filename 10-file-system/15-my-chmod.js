#!/usr/bin/env node

const fs = require('fs'),
      src=process.argv[2],
      mod=process.argv[3];

//./15-my-chomd.js file mod 

if(process.argv.length != 4){
  console.error('命令行参数不正确');
  process.exit(1);
}

try{
  fs.chmodSync(src,mod);
}catch(e){
  console.error(e.message);
  process.exit(2);
}

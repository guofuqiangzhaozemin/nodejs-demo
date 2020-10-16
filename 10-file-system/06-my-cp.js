#!/usr/bin/env node

const fs = require('fs'),
      src=process.argv[2],
      dst=process.argv[3];

let stm=fs.createReadStream(src);
stm.on('error',(e)=>{
  console.log(e.message);
});
stm.pipe(fs.createWriteStream(dst));
stm.on('close',()=>{
  fs.chmodSync(dst,fs.statSync(src).mode);
});



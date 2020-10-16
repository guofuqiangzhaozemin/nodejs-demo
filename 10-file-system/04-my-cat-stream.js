#!/usr/bin/env node

const fs = require('fs'),
      fileName=process.argv[2],
      log=console.log;

let stm=fs.createReadStream(fileName);

//异常捕获
stm.on('error',(e)=>{
  log(e.message);
});

stm.pipe(process.stdout);


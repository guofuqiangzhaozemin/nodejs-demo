#!/usr/bin/env node

const fs = require('fs'),
      fileName=process.argv[2],
      log=console.log;
try{
  let fid=fs.openSync(fileName,'r'),
      buf;

  buf=fs.readFileSync(fid);

  log(buf.toString('utf8'));
  fs.closeSync(fid);
}catch(e){
  console.error(e.message);
  process.exit(1);
}


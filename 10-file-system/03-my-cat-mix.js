#!/usr/bin/env node

const fs = require("fs"),
      fileName=process.argv[2],
      log=console.log;
try{
let fid=fs.openSync(fileName,'r'),
    buf;

buf=fs.readFileSync(fid);

log(buf.toString('utf8'));
}catch(e){
  console.error(e.message);
  process.exit(1);
}
fs.closeSync(fid);


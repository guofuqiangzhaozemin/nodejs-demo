#!/usr/bin/env node

const fs = require('fs'),
      fileName=process.argv[2],
      log=console.log;
try{

  let fid=fs.openSync(fileName,'r'),
      size=fs.statSync(fileName).size,
      buf=new Buffer(size);

  fs.readSync(fid,buf,0,size,0);
  log(buf.toString('utf8'));
  fs.closeSync(fid);
}catch(e){
  console.error(e.message);
  process.exit(1);
}


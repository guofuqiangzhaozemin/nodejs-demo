#!/usr/bin/env node

const fs = require('fs'),
      src=process.argv[2],
      log=console.log;
try{
  log(fs.statSync(src));
}catch(e){
  console.error(e.message);
  process.exit(1);
}



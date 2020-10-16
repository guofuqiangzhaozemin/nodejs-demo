#!/usr/bin/env node

const fs = require('fs'),
      dir=process.argv[2]||__dirname,
      log=console.log;
try{
  log(fs.readdirSync(dir));
}catch(e){
  console.error(e.message);
  process.exit(2);
}


#!/usr/bin/env node

const fs = require('fs'),
      lnkName=process.argv[2],
      log=console.log;
try{
  log(`${lnkName}->${fs.readlinkSync(lnkName)}`);
}catch(e){
  console.error(e.message);
  process.exit(2);
}
//打印的格式：ink->src
//inkName->


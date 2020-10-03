#!/usr/bin/env node

const fs = require("fs"),
      dirName=process.argv[2];

try{
  fs.rmdirSync(dirName);
}catch(e){
  console.error(e.message);
  process.exit(2);
}

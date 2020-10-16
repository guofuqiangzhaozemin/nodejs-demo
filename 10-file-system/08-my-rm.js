#!/usr/bin/env node

const fs = require('fs'),
      src=process.argv[2];
try{
  fs.unlinkSync(src);
}catch(e){
  console.error(e.message);
  process.exit(2);
}
 


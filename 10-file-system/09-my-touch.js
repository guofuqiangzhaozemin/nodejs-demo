#!/usr/bin/env node

const fs = require('fs'),
      src=process.argv[2];
//创建空文件
try{
  fs.writeFileSync(src,'');
}catch(e){
  console.error(e.message);
  process.exit(2);
}


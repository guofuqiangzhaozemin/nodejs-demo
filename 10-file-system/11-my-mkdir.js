#!/usr/bin/env node

const fs = require("fs"),
      dir=process.argv[2],
      log=console.log;
if(typeof(dir)==='undefined'){
  console.error('没有指定要创建的目录名称');
  process.exit(2);
}
fs.mkdirSync(dir);
 


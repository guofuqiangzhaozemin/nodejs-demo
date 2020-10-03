#!/usr/bin/env node

const fs = require("fs"),
      fileName=process.argv[2],
      log=console.log;
let num=1;
try{
  fs.readFileSync(fileName)
    .toString('utf8')
    .split('\n')
    .forEach((line)=>log(`${num++}\t${line}`));

}catch(e){
  log(e.message);
}

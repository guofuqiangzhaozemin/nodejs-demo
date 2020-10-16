#!/usr/bin/env node

const fs = require('fs'),
      fileName=process.argv[2],
      log=console.log;

fs.readFile(fileName,(err,data)=>{
  if(err){
    console.error(err.message);
    process.exit(1);
  }else{
    log(data.toString('utf8'));
  }

});

log('01-my-cat-async');


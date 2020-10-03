#!/usr/bin/node

const log=console.log,
      path=require('path');

log(`dir name:${__dirname}`);
log(`file name:${__filename}`);
fileName = path.join(__dirname,'views','login.html');
log('fileName:',fileName);

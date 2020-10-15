#!/usr/bin/node

const log=console.log;
if(process.argv.length!==3){
  console.error('命令行格式：cmd base64_string');
  process.exit(1);
}
const info=process.argv[2];
let buf = new Buffer(info,'base64');
let usr=buf.toString('utf-8').split(':');

if(usr.length!==2){
  console.error('信息有误！');
  process.exit(2);
}

log(`user:${usr[0]}`);
log(`info:${usr[1]}`);



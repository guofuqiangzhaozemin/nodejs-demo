#!/usr/bin/node

const argv=process.argv;
const log=console.log;

//validata
//1 argv number equal 3
if(argv.length!==3){
  log('cmd exit-code');
  process.exit(1);
}
//code type is number
if(isNaN(Number(argv[2]))){
  log('argv must be number');
  process.exit(2);
}
//code range > 0
if(Number(argv[2])<0){
  log('argv must > 0');
  process.exit(3);
}

process.exit(argv);


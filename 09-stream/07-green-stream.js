#!/usr/bin/node

const Writable =require('stream').Writable;

function GreenStream(){
  Writable.call(this);
  this._write=(chunk,encoding,callback)=>{
    process.stdout.write('\033[1;32m'+chunk+'\033[1;37m');
  
    callback();
  }
}
GreenStream.prototype=Writable.prototype;
let rs=new GreenStream();
process.stdin.pipe(rs);


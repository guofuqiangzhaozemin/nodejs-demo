#!/usr/bin/node

const Readable=require('stream').Readable;
let  c  = 'a'.charCodeAt(0);

class MyReadable extends Readable{
  constructor(){
    super();
  }
  _read(){
    rs.push(String.fromCharCode(c++));
    if(c>'z'.charCodeAt(0)){
      rs.push(null);
    }
  }
}
let rs=new MyReadable();
rs.pipe(process.stdout);


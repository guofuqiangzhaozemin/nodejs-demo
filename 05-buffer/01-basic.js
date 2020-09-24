#!/usr/bin/node

const log=console.log;
let buf1=new Buffer(256);
buf1[0]=0;
log(`buf1 length:${buf1.length}\n`);
log(buf1);
for(let i=0;i<buf1.length;i++){
  buf1[i]=i;
}
log(buf1);

let buf2=buf1.slice(250,256);

log('buf2:',buf2);
buf2.fill(0);
log('buf2:',buf2)
log('buf2:',buf2.toJSON());
let arr=['a',0xba,0xdf,0,255,10];
let buf3=new Buffer(arr);
log('buf3:',buf3);
let str="Hello World";
let buf4=new Buffer(str);
log('buf4:',buf4);
buf4.copy(buf3,0,0,buf3.length);
log('buf3:',buf3);

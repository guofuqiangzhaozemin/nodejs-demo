#!/usr/bin/env node

const fs=require('fs');

let data=new Uint8Array(256);
let d=0x00;

for(let i=0;i<256;i++){
  data[i]=d++;
}

fs.writeFileSync('./test.bin',data,'binary');




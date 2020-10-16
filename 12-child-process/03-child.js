#!/usr/bin/env node


setInterval(()=>{
  console.log(Date.now());
},1000);

setTimeout(()=>{
  process.exit();
},10000);



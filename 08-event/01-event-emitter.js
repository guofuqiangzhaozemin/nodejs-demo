#!/usr/bin/node
const EventEmitter=require('events').EventEmitter;
const e=new EventEmitter();
const log=console.log;

setInterval(()=>{
   e.emit('hello');
},1000);
setTimeout(()=>{
  e.emit('bye');
},5000)
e.on('hello',()=>{
  log('hello world')
});
e.on('bye',()=>{
  log('goodbye');
  process.exit();
});

#!/usr/bin/node

const log = console.log,
      pi  = Math.PI;

module.exports={
  diameter:(r)=>2*r,
  circumference:(r)=>pi*2*r,
  area:(r)=>pi*r*r
};

log(module);



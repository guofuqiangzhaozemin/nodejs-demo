#!/usr/bin/node

const log=console.log,
      pi=Math.PI;

module.exports=(r)=>{
  function circumference(){
    return pi*2*r;
  }

  function area(){
    return pi*r*r;
  }

  return {
    circumference:circumference,
    area:area
  };
};

log(module);


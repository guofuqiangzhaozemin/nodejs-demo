#!/usr/bin/node

const log = console.log,
      pi  = Math.PI;

function Circle(r){
  var _r = r;

  this.diameter = () =>2*_r;
  this.circumference = () =>pi*2*_r;
  this.area = () =>pi*_r*_r;
}

module.exports=Circle;

log(module);


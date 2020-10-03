#!/usr/bin/node

const log   =console.log,
      Circle=require('./04-export-object.js'),
      chalk =require('chalk'),
      info  =chalk.greenBright;

let c=new Circle(20);

log(info(`area:${c.area()}`));
log(info(`diameter:${c.diameter()}`));
log(info(`circumference:${c.circumference()}`));

log(module);


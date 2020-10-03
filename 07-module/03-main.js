#!/usr/bin/node

const log   =console.log,
      circle=require('./03-export-function.js'),
      chalk =require('chalk'),
      info  =chalk.greenBright;

let c=circle(20);

log(info(`area:${c.area()}`));
log(info(`circumference:${c.circumference()}`));

log(module);


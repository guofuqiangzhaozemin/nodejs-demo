#!/usr/bin/node

const log   =console.log,
      circle=require('./05-export-object.js'),
      chalk =require('chalk'),
      info  =chalk.greenBright;


log(info(`area:${circle.area(20)}`));
log(info(`diameter:${circle.diameter(20)}`));
log(info(`circumference:${circle.circumference(20)}`));

log(module);


#!/usr/bin/node

const log   =console.log,
      circle=require('./06-export-object.js'),
      chalk =require('chalk'),
      info  =chalk.greenBright;


log(info(`area:${circle.area(20)}`));
log(info(`diameter:${circle.diameter(20)}`));
log(info(`circumference:${circle.circumference(20)}`));

log(module);


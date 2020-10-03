#!/usr/bin/node

const log  =console.log,
      pi   =require('./02-export-var.js'),
      chalk=require('chalk'),
      info =chalk.greenBright;

log(info(`PI:&{pi}`));
log(module);

#!/usr/bin/node

const pi=require('./02-export-var.js'),
      chalk=require('chalk');

console.log(chalk.green(`pi:${pi}`));
console.log(module);

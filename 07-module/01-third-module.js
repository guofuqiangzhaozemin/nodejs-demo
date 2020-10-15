#!/usr/bin/env node

const log=console.log,
      chalk=require('chalk');
log('This is   '+ chalk.red('red.'));

log('This is   '+ chalk.green('green.'));

log('This is   '+ chalk.red('red')+' and '+chalk.green('green.'));

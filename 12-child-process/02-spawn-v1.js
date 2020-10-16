#!/usr/bin/env node

const cp  = require('child_process');

let child = cp.spawn('cat',['01-exec-file.js']);

child.stdout.pipe(process.stdout);

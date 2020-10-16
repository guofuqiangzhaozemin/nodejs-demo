#!/usr/bin/env node

const cp  = require('child_process');

let child = cp.spawn('./03-child.js');

child.stdout.pipe(process.stdout);



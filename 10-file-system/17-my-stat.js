#!/usr/bin/env node

const fs = require("fs"),
      src=process.argv[2],
      log=console.log;

log(fs.statSync(src));




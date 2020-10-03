#!/usr/bin/env node

const fs = require("fs"),
      src=process.argv[2],
      mod=process.argv[3],
      log=console.log;

//./15-my-chomd.js file mod 


fs.chmodSync(src,mod);


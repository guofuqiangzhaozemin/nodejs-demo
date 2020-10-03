#!/usr/bin/env node

const fs = require("fs"),
      uid=process.argv[2],
      gid=process.argv[3],
      src=process.argv[4],
      log=console.log;

fs.chownSync(src,Number(uid),Number(gid));

//./16-chown.js uid:gid file 




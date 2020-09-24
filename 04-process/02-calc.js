#!/usr/bin/node

const log=console.log;
      argv=process.argv[2];
      try {
        log(`${argv}=${eval(argv)}`);
      }catch(e){
        log(`非法表达式`);
      }

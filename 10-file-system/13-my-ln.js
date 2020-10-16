#!/usr/bin/env node

const fs = require('fs');

switch(process.argv.length){
  case 4:{    //hard link node 13-In.js src link
    let src = process.argv[2],
        ink = process.argv[3];
    try{
      fs.linkSync(src,ink);
    }catch(e){
      console.error(e.message);
      process.exit(2);
    }
    break;
  }

  case 5:{//soft link node 13-In.js src link
    let opt = process.argv[2],
        src = process.argv[3],
        ink = process.argv[4];
    if(opt==='-s'){
      try{
        fs.symlinkSync(src,ink);
      }catch(e){
        console.error(e.message);
        process.exit(3);
      }
    }
    break;
  }

  default:
    console.error('命令行参数不正确');
    process.exit(1);

}


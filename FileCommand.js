#!/usr/bin/env node

const fs = require('fs'),
      src = process.argv[2],
      fileName = process.argv[3],
      join = require('path').join,
      opt = join('sysFile',fileName),
      path='sysFile',
      log = console.log;


if(src=='-list'){
  let arr1=[],
      f=fs.readdirSync(fileName);
  for(let i=0;i<f.length;i++){
    let fN=f[i],
        fS=fs.statSync(fileName+'/'+f[i]).size;
    arr1[i]={'fileName':`${fN}`,'fileSize':`${fS}`};
  }
  arr1.sort(function(fileSize1,fileSize2){
    return fileSize1.fileSize-fileSize2.fileSize;
  });
  log(JSON.stringify(arr1,'','\t'));
}


if(src=='-show'){
  let file = join(path,fileName);
  let num=1;
  if(fs.existsSync(file)){
    fs.readFileSync(file).toString('utf8').split('\n').forEach((line)=>log(`${num++}\t${line}`));           
  }else{
    log('%s not exist',fileName);
    process.exit(3);                
  }
}



if(src=='-del'){
  if(process.argv.length!==4){
    console.error('命令行参数不正确');
    process.exit(1);
  }

  if(!fs.existsSync(opt)){
    log('%s not exist!',fileName);
    process.exit(2);
  }

  if(fs.statSync(opt).isFile()){
    fs.unlinkSync(opt);
    log('%s 删除成功',fileName);
    process.exit();
  }

  if(fs.statSync(opt).isDirectory()){
    deleteDir(opt);
    log('%s 删除成功',fileName);
    process.exit();
  }
}


function deleteDir(folder){
  let files = fs.readdirSync(folder);
  for(let i=0;i<files.length;i++){
    let file = join(folder,files[i]);
    if(fs.statSync(file).isFile()){
      fs.unlinkSync(file);
      continue;
    }
    if(fs.statSync(file).isDirectory()){
      deleteDir(file);
    }
  }
  fs.rmdirSync(folder);
}


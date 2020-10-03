#!/usr/bin/node

const log=console.log,
      fs=require('fs'),
      http=require('http'),
      path=require('path'),
      pic=process.argv[2];
if(process.argv.length!==3){
  console.error('命令行参数格式：cmd fileName');
  process.exit(1);
}
try{
  var data=fs.readFileSync(pic).toString('base64');
}catch(e){
  console.error(e.message);
  process.exit(2);
}

//log(`uri:${uri}\n`);
var ext=path.extname(pic);
var uriData='data:image/'+ext.slice(1,ext.length)+';base64,'+data;


var html='<!DOCTYPE html><html><body><img alt="'+path.basename(pic,ext)+'" src="'+uriData+'"</body></html>'

http.createServer((req,res)=>{
  res.end(html);
}).listen(8080);

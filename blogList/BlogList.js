#!/usr/bin/env node

const http=require('http'),
      fs=require('fs');
function genPage(){
  let html=fs.readFileSync('./chapters.html');
  return html;
}

function genJs(){
  let js=require('./data.js');
  for(let i=0;i<js.chapterList.length;i++){
    for(let j=0;j<i;j++){
      if(js.chapterList[j].publishTimer<js.chapterList[j+1].publishTimer) {
        let a = js.chapterList[j];                              
        js.chapterList[j]=js.chapterList[j+1];
        js.chapterList[j+1]=a;
      }
    }
  }
  return js.chapterList;
}
let base=fs.readFileSync('./css/base.css');
let style=fs.readFileSync('./css/style.css');
let img1=fs.readFileSync('./images/1442457564979540.jpeg');
let img2=fs.readFileSync('./images/1442201163344838-lp.jpg');
let img3=fs.readFileSync('./images/1442642178239101-lp.jpg');
let img4=fs.readFileSync('./images/1442539025939884-lp.jpg');
let img5=fs.readFileSync('./images/img/time.jpg');
let img6=fs.readFileSync('./images/img/h_line.jpg');
let img7=fs.readFileSync('./images/img/r_line.jpg');
let img8=fs.readFileSync('./images/1442457564979540.jpeg');
let img9=fs.readFileSync('./images/img/newsbg03.png');
http.createServer((req,res)=>{
  if(req.url==='/'){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(genPage());             
  }
  if(req.url==='/getlist'){
    res.end(JSON.stringify(genJs()));
  }
  if(req.url==='/css/base.css'){
    res.end(base);
  }
  if(req.url==='/css/style.css'){
    res.end(style);
  }
  if(req.url==='/images/1442457564979540.jpeg'){
    res.end(img1);          
  }
  if(req.url==='/images/1442201163344838-lp.jpg'){
    res.end(img2);
          
  }
  if(req.url==='/images/1442642178239101-lp.jpg'){
    res.end(img3);
          
  }
  if(req.url==='/images/1442539025939884-lp.jpg'){
    res.end(img4);
          
  }
  if(req.url==='/images/img/time.jpg'){
    res.end(img5);
          
  }
  if(req.url==='/images/img/h_line.jpg'){
    res.end(img6);
          
  }
  if(req.url==='/images/img/r_line.jpg'){
    res.end(img7);
          
  }
  if(req.url==='/images/1442457564979540.jpeg'){
    res.end(img8);
          
  }
  if(req.url==='/images/img/newsbg03.png'){
    res.end(img9);
          
  }


}).listen(8080);


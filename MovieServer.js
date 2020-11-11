#!/usr/bin/env node
const http=require('http'),
      fs=require('fs');


function genPage(){
  let html=fs.readFileSync('./index.html');
  return html;

}
function genJs(){
  let js=require('./data.js');
  function checkFilter(i){
    return i.movieRange!=='暂无评分';
  }
  function sortNum(a,b){
    return b.movieRange-a.movieRange;
  }
  let html=js.filter(checkFilter);
  let html1=html.sort(sortNum);
  return html1;
}

http.createServer((req,res)=>{
  if(req.url==='/'){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(genPage());
              
  }
  if(req.url==='/getlist'){
    res.end(JSON.stringify(genJs()));
          
  }


}).listen(8080);

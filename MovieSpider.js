#!/usr/bin/env node

const https = require('https'),
      http=require('http'),
      fs=require('fs'),
      cheerio = require('cheerio'),
      addr = 'https://maoyan.com/films?showType=3',
      url = require('url'),
      log = console.log;
let opt = url.parse(addr);
opt.headers = {
  'Cookie': 'uuid_n_v=v1; uuid=F29503C01CE611EB911867C693E00367097042B23EC940CD928F3BA8CBD9AF0A; _lxsdk_cuid=175881cbdcd58-06e40b43e506-303464-e1000-175881cbdcfc8; _lxsdk=F29503C01CE611EB911867C693E00367097042B23EC940CD928F3BA8CBD9AF0A; Hm_lvt_703e94591e87be68cc8da0da7cbd0be2=1604371205; __mta=121535287.1604306402540.1604306402540.1604371205005.2',
  'Host': 'maoyan.com',
  'Sec-Fetch-Dest': 'document',
  'Sec-Fetch-Mode': 'navigate',
  'Sec-Fetch-Site': 'none',
  'Upgrade-Insecure-Requests': '1',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36'
};
let moviesList=[];
https.get(opt,(res)=>{
  let data='';
  res.on('data',(chunck)=>data+=chunck);
  res.on('end',()=>{
    let $ = cheerio.load(data);
    $('body').find('.movie-list>dd').each(function(){
      let movieId1=$(this).find('.movie-item>a').attr('data-val');
      let movieId=movieId1.slice(9,-1);
      let movieName=$(this).find('.movie-item-title>a').text();
      let movieRange=$(this).find('div.channel-detail-orange').text();
  
      let movieItem=new Object();
      movieItem.movieId=movieId;
      movieItem.movieName=movieName;
      movieItem.movieRange=movieRange;
      moviesList.push(movieItem);
    });
    log(moviesList);
  });    
});

function genPage(){
  let html=fs.readFileSync('./index.html');
  return html;
}

http.createServer((req,res)=>{
  if(req.url==='/'){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(genPage());
  }
  if(req.url==='/getlist'){
    res.end(JSON.stringify(moviesList));
  }

}).listen(8080);


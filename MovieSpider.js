#!/usr/bin/env node

const http = require('https'),
      cheerio = require('cheerio'),
      addr = 'https://maoyan.com/films?showType=3',
      url = require('url'),
      log = console.log;
let opt=(ad)=>{
  let p = url.parse(ad);
  p.headers={
    'user-agent':'curl/7.29.0'
  };
  return p;
};
get(addr);
function get(ad){
  http.get(opt(ad),(res)=>{
    let data='';
    res.on('data',(chunck)=>data+=chunck);
    res.on('end',()=>{
      let $ = cheerio.load(data);
      $('body').find('.movie-list>dd').each(function(){
        let movieId=$(this).find('.movie-item>a').attr('data-val');
        let movieName=$(this).find('.movie-item-title>a').text();
        let movieRange=$(this).find('.channel-detail>.integer').text();
        let movieRange1=$(this).find('.channel-detail>.fraction').text();
        
        log(movieId);
        log(movieName);
        log(movieRange+movieRange1);
      });
    
    });    

  });
}

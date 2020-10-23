#!/usr/bin/env node

const http = require('https'),
      log = console.log,
      cheerio = require('cheerio'),
      //url = require('url'),
      addr ='https://ke.sifou.com/free',
      baseURL='https://ke.sifou.com/free';


http.get(addr,(res)=>{

  let data='';

  res.on('data',(chunck)=>data+=chunck);
  res.on('end',()=>{
    let $ = cheerio.load(data);
    let courses=$('body').find('h5.card-title>a');
    for(let i=0;i<courses.length;i++){
      //log($(courses[i]).html().toString('utf8'));
      log($(courses[i]).text());
      log(baseURL+$(courses[i]).attr('href'));
      log();
    }
    
  });

});


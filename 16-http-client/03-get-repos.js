#!/usr/bin/env node

const http = require('https'),
      log = console.log,
      url = require('url'),
      name = process.argv[2];

let addr=`https://api.github.com/search/repositories?q=user:${name}`;
let opt=url.parse(addr);
opt.headers={
  'user-agent':'curl/7.29.0'
};
http.get(opt,(res)=>{

  log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage} `);

  log(res.headers);

  res.pipe(process.stdout);
  let data='';
  res.on('data',(chunck)=>data+=chunck);
  res.on('end',()=>{
    let rs=[],num=1;
    data=JSON.parse(data).items;
    data.forEach((item)=>{
      rs.push({
        num:num++,
        name:item.name,
        description:item.description
      });
    });
    console.table(rs);
  });
});


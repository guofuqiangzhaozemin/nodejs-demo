#!/usr/bin/env node

const http = require('https'),
      log = console.log,
      city=process.argv[2]||'石家庄',
      url=require('url'),
      addr = 'https://api.66mz8.com/api/weather.php?location='+city;
log(global.encodeURI(addr));
process.exit();
let opt=url.parse(addr); 
opt.headers={
  'user-agent':'curl/7.29.0'
};
http.get(addr,(res)=>{
  log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage} `);

  log(res.headers);

  res.pipe(process.stdout);

});


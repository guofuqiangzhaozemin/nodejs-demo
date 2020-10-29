#!/usr/bin/env node

const url=require('url'),
      qs=require('querystring'),
      log=console.log;

let addr='http://wangding:123@www.baidu.com:8080/a/b/c?age=20&gender=M#/d/e/f';

addr=url.parse(addr);
log(addr);

log(addr.protocol);
log(addr.auth);
log(addr.username);
log(addr.password);
log(addr.hostname);
log(addr.port);
log(addr.pathname);
log(addr.query);
log(addr.hash);
log(qs.parse(addr.query));



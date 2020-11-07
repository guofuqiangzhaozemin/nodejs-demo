#!/usr/bin/env node

const Koa = require('koa'),
      task = require('./lib/task.js'),
      logger = require('koa-logger');

const app = new Koa(),
      log = console.log;



app.use(logger());

app.use(async(ctx) => {  //M-hello
  ctx.body = 'hello koa! task cost: ' + await task() + 'ms';
});

app.listen(8080);




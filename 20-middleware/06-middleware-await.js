#!/usr/bin/env node

const Koa = require('koa'),
      task = require('./lib/task.js');

const app = new Koa(),
      log = console.log;



app.use(async(ctx, next)=> {  //M-logger
  const start = Date.now();
  await next();
  const end = Date.now();
  log(`${ctx.method} ${ctx.path} cost: ${end-start}ms`);
});
app.use(async(ctx) => {  //M-hello
  ctx.body = 'hello koa! task cost: ' + await task() + 'ms';
});

app.listen(8080);

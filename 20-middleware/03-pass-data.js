#!/usr/bin/env node

const Koa = require('koa');

const app = new Koa(),
      log = console.log;

//console.log('Hello World');

app.use((ctx, next)=> {  //M-logger
  log(`${ctx.method} ${ctx.path}`);
  next();
  log(`cost: ${ctx.cost}ms`);
});
app.use((ctx, next) => {  //M-ms
  const start = Date.now();
  next();
  const end = Date.now();
  ctx.cost = end-start;
});
app.use((ctx) => {  //M-hello
  ctx.body = 'hello koa';
});

app.listen(8080);




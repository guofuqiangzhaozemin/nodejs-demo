#!/usr/bin/env node

const Koa=require('koa'),
      logger=require('./middleware/logger.js'),
      log=console.log;

const app=new Koa();

console.log('hello world');
app.use((ctx,next)=>{

  log(`${ctx.method} ${ctx.path}`);
  next();
});
app.use((ctx,next)=>{
  ctx.body='hello koa';
});
app.listen(8080);




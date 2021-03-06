#!/usr/bin/env node

const Koa=require('koa'),
      log=console.log;

const app=new Koa();

console.log('hello world');
app.use((ctx,next)=>{

  log(`${ctx.method} ${ctx.path}`);
  next();
});
app.use((ctx,next)=>{
  const start=Date.now();
  next();
  const end=Date.now();
  log(`cost:${end-start}ms`);
});
app.use((ctx,next)=>{
  ctx.body='hello koa';
});
app.listen(8080);




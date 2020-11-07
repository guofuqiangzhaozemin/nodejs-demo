#!/usr/bin/env node

const Koa=require('koa'),
      log=console.log;

const app=new Koa();

console.log('hello world');
app.use((ctx,next) =>{

  log(`${ctx.method} ${ctx.path}`);
  next();
  log(`cost:${ctx.cost}ms`);
});
app.use((ctx,next)=>{
  const start=Date.now();
  next();
  const end=Date.now();
  ctx.cost= end-start;
});
app.use((ctx,next)=>{
  ctx.body='hello koa';
  next();
});
app.listen(8080);




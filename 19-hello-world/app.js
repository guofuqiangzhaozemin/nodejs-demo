#!/usr/bin/env node

const Koa=require('koa');

const app=new Koa();
app.use((ctx,next)=>{
  ctx.body='hello koa';
});
app.listen(8080);

console.log('hello world');


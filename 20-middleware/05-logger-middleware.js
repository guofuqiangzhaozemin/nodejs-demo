#!/usr/bin/env node

const Koa=require('koa'),
      logger=require('./middleware/logger.js');

const app=new Koa();

console.log('hello world');
app.use(logger);
app.use((ctx)=>{
  ctx.body='hello koa';
});
app.listen(8080);




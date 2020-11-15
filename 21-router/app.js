#!/usr/bin/env node

const Koa=require('koa'),     
      tasks=require('./routes/tasks.js'),
      bodyparser=require('koa-bodyparser'),
      log=console.log;
const app=new Koa();


app.use(bodyparser({enableTypes:['json','form','text']}));
app.use(tasks.routes());



app.listen(8080);




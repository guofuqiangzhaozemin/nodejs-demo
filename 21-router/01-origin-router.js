#!/usr/bin/env node

const Koa=require('koa'),
      log=console.log;
const app=new Koa();

app.use((ctx,next)=>{
  if(ctx.method==='GET' && ctx.path==='/api/tasks/'){
    log('得到待办事项列表');
    ctx.body='查询成功';
  }
  
  if(ctx.method==='POST' && ctx.path==='/api/tasks/'){
    log('提交待办事项列表');
    ctx.body='添加成功';
                
  }
  if(ctx.method==='PUT' && /\/api\/tasks\/(\d)+$/.test(ctx.path)){
    log('修改待办事项列表');
    ctx.body='修改成功';
              
  }
  if(ctx.method==='DELETE' && /\/api\/tasks\/(\d)+$/.test(ctx.path)){
    log('删除待办事项列表');
    ctx.body='删除成功';
              
  }
 



});
app.listen(8080);




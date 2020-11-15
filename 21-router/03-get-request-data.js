#!/usr/bin/env node

const Koa=require('koa'),
      Router=require('koa-router'),
      router=new Router(),
      bodyparser=require('koa-bodyparser')
      log=console.log;
const app=new Koa();


router.get('/api/tasks/',async(ctx,next)=>{
  let {page,limit}=ctx.query;
  log(ctx.header['user-agent']);
  log(`得到待办事项列表,page=${page},limit=${limit}`);
  ctx.body='查询成功';
})
  
router.post('/api/tasks/',async(ctx,next)=>{
  let {task} =ctx.request.body;

  log(`提交待办事项列表,task:${task}`);
  ctx.body='添加成功';
})
router.put('/api/tasks/:id',async(ctx,next)=>{
  let {id}=ctx.params;
  let {task}=ctx.request.body;
  log(`修改待办事项列表,id=${id},task=${task}`);
  ctx.body='修改成功';
              
})
router.delete('/api/tasks/:id',async(ctx,next)=>{

  let {id}=ctx.params;
  log(`删除待办事项列表,id=${id}`);
  ctx.body='删除成功';
              
})


app.use(bodyparser({enableTypes:['json','form','text']}));
app.use(router.routes());



app.listen(8080);




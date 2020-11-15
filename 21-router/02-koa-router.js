#!/usr/bin/env node

const Koa=require('koa'),
      Router=require('koa-router'),
      router=new Router(),
      log=console.log;
const app=new Koa();


router.get('/api/tasks/',async(ctx,next)=>{

  log('得到待办事项列表');
  ctx.body='查询成功';
})
  
router.post('/api/tasks/',async(ctx,next)=>{


  log('提交待办事项列表');
  ctx.body='添加成功';
})
router.put('/api/tasks/:id',async(ctx,next)=>{

  log('修改待办事项列表');
  ctx.body='修改成功';
              
})
router.delete('/api/tasks/:id',async(ctx,next)=>{


  log('删除待办事项列表');
  ctx.body='删除成功';
              
})
 
app.use(router.routes());


app.listen(8080);




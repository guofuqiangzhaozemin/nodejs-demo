

const Router=require('koa-router'),
      router=new Router(),
      log=console.log;

router.prefix('/api/tasks');
router.get('/',async(ctx,next)=>{
  let {page,limit}=ctx.query;
  log(ctx.header['user-agent']);
  log(`得到待办事项列表,page=${page},limit=${limit}`);
  ctx.body='查询成功';
})
  
router.post('/',async(ctx,next)=>{
  let {task} =ctx.request.body;

  log(`提交待办事项列表,task:${task}`);
  ctx.body='添加成功';
})
router.put('/:id',async(ctx,next)=>{
  let {id}=ctx.params;
  let {task}=ctx.request.body;
  log(`修改待办事项列表,id=${id},task=${task}`);
  ctx.body='修改成功';
              
})
router.delete('/:id',async(ctx,next)=>{

  let {id}=ctx.params;
  log(`删除待办事项列表,id=${id}`);
  ctx.body='删除成功';
              
})


module.exports=router;



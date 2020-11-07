const log=console.log;
async function logger(ctx,next){
 const start=Date.now();
 next();
 const end=Date.now();
 log(`${ctx.method} ${ctx.path} ${end-start}ms`);
}

module.exports=logger;




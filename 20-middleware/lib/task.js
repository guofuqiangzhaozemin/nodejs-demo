function fakeAsync(){
  let delay=Math.random()*1000;
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log(`Task use ${delay}ms`);
    },delay);
  
  });


}

module.exports=fakeAsync;

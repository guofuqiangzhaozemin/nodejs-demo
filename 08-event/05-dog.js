function Dog(name,energy){
  let _listeners={};

  let _name=name,
      _energy=energy;
      
  let timer=setInterval(()=>{
    if(_energy>0){
      emit('bark');
      _energy--;
    }
    else{
      clearInterval(timer);
    }
  },1000);

  this.name=()=>_name;
  this.energy=()=>_energy;

  this.on=(evt,fn)=>{
    if(typeof(_listeners[evt])==='undefined'){
      _listeners[evt]=[];
    }
    //validate _listeners[evt] exist
    _listeners[evt].push(fn);
  };
  function emit(evt,arg){
    if(typeof(_listeners[evt])==='undefined'){
      return;
    }
    _listeners[evt].forEach((fn)=>{
      fn.call(this,arg);
    });
  }
}
module.exports=Dog;

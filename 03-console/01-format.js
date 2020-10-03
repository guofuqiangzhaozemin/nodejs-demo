#!/usr/bin/node

const user={
  name:'zhaozemin',
  age:20,
  qq:'1111111',
};
const log=console.log;

log('name:%s',user.name);
log('age:%d',user.age);
log('user:%j',user);


log('qq:%s',user.qq);
log('qq:',user.qq);
log('qq:'+user.qq);
log(`qq:${user.qq}`);

console.error('Error! something wrong!');

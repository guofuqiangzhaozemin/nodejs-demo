#!/usr/bin/node

const stdin=process.stdin,
      stdout=process.stdout;

stdin.setEncoding('utf8');

stdin.on('data',(data)=>{
  stdout.write(data.toUpperCase());
});

stdin.on('end',()=>{
  process.exit();
});

stdin.push('hello world\n');

for(var c='a'.charCodeAt(0);c<='z'.charCodeAt(0);c++){
  stdout.write(String.fromCharCode(c));
}

stdout.write('\n');

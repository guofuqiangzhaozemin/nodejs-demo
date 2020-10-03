#!/usr/bin/node

const log =console.log;
log(`architecture:${process.arch}`);
log(`platform:${process.platform}\n`);
log(`process id:${process.pid}`);
log(`execPath:${process.execPath}\n`);


log(`nodejs version:${process.version}\n`);
log(`user id:${process.getuid()}`);
log(`group id:${process.getgid()}`);
log(`cwd:${process.cwd()}\n`);

log(`rss:${process.memoryUsage().rss}`);
log(`heapTotal:${process.memoryUsage().heapTotal}`);
log(`heapUsed:${process.memoryUsage().heapUsed}`);
log(`external:${process.memoryUsage().external}\n`);

log(`env:`);
log(process.env);
log(`Host name:${process.env.HOSTNAME}`);

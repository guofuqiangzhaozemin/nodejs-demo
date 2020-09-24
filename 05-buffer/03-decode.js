#!/usr/bin/node

const log=console.log;
info=process.argv[2];
let buf = new Buffer(info,'base64');
let usr=buf.toString('utf-8').split(':');

log(`user:${usr[0]}`);
log(`info:${usr[1]}`);


var koa = require('koa');
var http = require('http');
var path = require('path');

var app = new koa();
app.use(require('koa-static')(path.join(__dirname, './src')));

http.createServer(app.callback()).listen(3003)
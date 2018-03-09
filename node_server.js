var http = require('http');
var express = require('express');

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
app.use('/', express.static(__dirname + '/app'));

server.listen(8080);
console.log('server start');
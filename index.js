var express = require ('express');
var server = express ();
var port =8080;
server.listen (port,function (){
  console.log('the server is now listening on port',port);
});
server.get('/', function(request,response){
  response.sendfile('index.html', {root: __dirname+ '/public/html'});
});
server.get('/login' function(request,respose){
response.sendfile('index.html', {root: __dirname+ '/public/html'});
});
server.get('/signup' function(request,respose){
  respose.sendfile('index.html', ){root: __dirname+ 'public/html'});
});

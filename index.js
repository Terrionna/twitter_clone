var express = require ('express');
var server = express ();
var port =8080;
server.listen (port,function (){
  console.log('the server is now listening on port',port);
});
server.get('/', function(request,response){
  response.sendfile('index.html')
}

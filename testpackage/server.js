var express = require('express');
var app = express();
app.get('/',function(req,res) {
   res.send('Hello World!');
});
var server = app.listen(3000, function () {
   console.info("listening on port: %d" , server.address().port);
});
app.get('/hi',function(req,res) {
   res.send('北鼻抗忙');
});
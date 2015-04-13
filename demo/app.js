var express = require('express');
var app = express();
// routes
app.get('/', function (req,res) {
   res.send('Hello World!');
});
var server = app.listen(3000,function() {
   console.info("Listening on port: %d",server.address().port);
});
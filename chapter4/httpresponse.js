var http = require('http');
var req = http.get({host:'tangtaijia.com'});
req.on('response', function (res) {
   res.setEncoding('utf8');
   res.on('data', function (data) {
      console.info(data);
   });
});
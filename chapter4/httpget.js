var http = require('http');
http.get({host:'tangtaijia.com'}, function (res) {
   res.setEncoding('utf8');
   res.on('data', function (data) {
      console.info(data);
   });
});
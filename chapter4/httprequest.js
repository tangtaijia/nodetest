var http = require('http');
var querystring = require('querystring');

var contents = querystring.stringify({
   name : 'byvoid',
   email : 'byvoid@qq.com',
   address : 'Nanjing University'
});

var options = {
   host : 'www.byvoid.com',
   path : '/root/taijia/workspaces/nodetest/chapter4/post.php',
   method : 'POST',
   headers : {
      'Content-Type':'application/x-www-form-urlencoded',
      'Content-Length':contents.length
   }
};

var req = http.request(options, function (res) {
   res.setEncoding('utf8');
   res.on('data', function (data) {
      console.info(data);
   });
});

req.write(contents);
req.end();
function callback(err, data) {
    if (err) console.error(err);
    if (data) console.info(data);
}
var fs = require('fs');
fs.readFile('file.txt','utf-8',callback);
console.info('end');

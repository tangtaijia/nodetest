var fs = require('fs');
// 异步读取文件
var data = fs.readFileSync('file.txt','utf-8');
console.info(data);
console.info('end');
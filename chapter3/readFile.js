var fs = require('fs');
// 读取文件
fs.readFile('file.txt', 'utf-8', function (err, data) {
    if (err) console.error(err);
    if (data) console.info(data);
});
console.info('end');
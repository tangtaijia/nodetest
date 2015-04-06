var hello1 = require('./module');
hello1.setName('World!');
// 实际上单次加载，指向同一个对象
var hello2 = require('./module');
hello2.setName('!');
hello1.sayHello();
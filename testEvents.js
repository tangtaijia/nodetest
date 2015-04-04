var events = require('events');
var emmiter = new events.EventEmitter(); // 事件触发器
// 监听事件myEvent
emmiter.on("myEvent", function (msg) {
   console.info(msg);
});
// 触发事件myEvent
emmiter.emit("myEvent","Hello World!");
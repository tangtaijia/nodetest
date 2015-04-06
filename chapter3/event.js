var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter;
var event_name = 'my_event';
event.on(event_name,function() {
    console.info('some event occured');
});

setTimeout(function() {
    event.emit(event_name);
},1000);
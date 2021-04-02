const EventEmitter = require('events');
//events can consists of emitters and listeners
//a listener will do something triggered by the emitter

//lets create a class
class MyEmitter extends EventEmitter {}

//lets create an object
const myEmitter = new MyEmitter;

//lets make an event listener
//the first parameter is the value that will trigger the event
//the second parameter is the action the listener will take
myEmitter.on('wow', () => {console.log('event triggered!')});

//lets emit the event
myEmitter.emit(+'1');//wont trigger
myEmitter.emit(true);//wont trigger
myEmitter.emit('wow');//will trigger




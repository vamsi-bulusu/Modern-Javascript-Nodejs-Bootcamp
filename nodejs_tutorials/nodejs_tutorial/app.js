//Importing tutorials module
const tutorial = require('./tutorial');

//Importing events class
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

//registering an event
eventEmitter.on('tutorial', (a, b) =>{
    console.log(a+b);
});

//emitting an event
eventEmitter.emit('tutorial', 1, 2);

console.log(tutorial);

console.log(tutorial.sum(1, 2));

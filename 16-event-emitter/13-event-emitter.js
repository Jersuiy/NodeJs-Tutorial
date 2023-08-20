// EventEmitter is a class.
// get back the class
// if you want to custom extend from class
// otherwise just for emitting and handling events create instance

const EventEmitter = require('events');
// on - listens for an event
// emit - emit an event

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, id) => {
    console.log(`data received user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
    console.log('some other logic here')
})

customEmitter.emit('response', 'Joseph', 34)

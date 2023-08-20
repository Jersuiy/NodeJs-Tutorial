const { createReadStream, createWriteStream } = require('fs');

const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 });
// The second argument is a object that can be use to control the size of the buffer and also the encoding.
//  createReadStream('./content/big.txt', { highWaterMark: 90000, encoding: 'utf8'})


// default highWaterMark 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('../content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

// stream data event listener:
stream.on('data', (result) => {
    console.log(result);
    console.log(stream.bytesRead)
})
// stream error event listener:
stream.on('error', (err) => console.log(err.name + ': CAN\'T LOCATE FILE...\n<check directory>'))

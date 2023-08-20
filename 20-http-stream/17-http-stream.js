var http = require('http')
var fs = require('fs')

http
    .createServer(function (req, res) {
        // const text = fs.readFileSync('./content/big.txt', 'utf8')
        // res.end(text)
        const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
        fileStream.on('open', () => {
            fileStream.pipe(res)
        })
        fileStream.on('error', (err) => {
            res.end(err)
        })
    })
    .listen(5000)


// The use of the pipe() method is to join or pipe two streams together. Basically, this method is called on a readable stream to pass data to write onto a writable stream.

// const readable = createReadStream('../content/names.txt');
// const writable = createWriteStream('../content/subfolder');

// readable.pipe(writable);
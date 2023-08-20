const http = require('http')

// const server = http.createServer((req, res) => {
//   console.log('request event')
//   res.end('Hello World')
// })

// server.listen(5000, () => {
//   console.log('Server listening on port : 5000....')
// })


// the callback func in the http.createSever has two parameter which are object, the first one is the 'request'(req) which present the incoming request, and the response is what will be sent back.

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('Welcome to our home page')
    }

    if (req.url === '/about') {
        res.end('Here is a short history')
    }

    res.end(`
        <h1 align="center">Opps!</h1>
        <p>We can't seems to find the page you're requesting for.</p>
        <a href="/">back home</a>
    `)

    // console.log(req)
    // res.write('Hello There, Welcome to our first webpage')
    // res.end();
});

server.listen(5000);
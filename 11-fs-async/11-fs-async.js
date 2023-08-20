// Asynchronous Mode
console.log('start');
const { readFile, writeFile } = require('fs');

readFile('../content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return;
    }
    const first = result;
    readFile('../content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;

        writeFile('../content/result-async.txt', `Here is the result: ${first},\n${second}`, (err, result) => {
            if (err) {
                console.log(err)
                return;
            }
            console.log('done with this task');
        })
    })
})
// The result will be a buffer if the encoding is not passed in the parameter
console.log('starting the next task');
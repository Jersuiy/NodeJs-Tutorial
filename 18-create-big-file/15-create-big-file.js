// const { writeFileSync } = require('fs')
// for (let i = 0; i < 10000; i++) {
//     writeFileSync('../content/big.txt', `hello world ${i}\n`, { flag: 'a' })
// }

// Example Illustration 2:
const { writeFileSync } = require('fs')
for (let i = 0; i < 100000; i++) {
    writeFileSync('../content/big.txt', `hello world ${i}\n`, { flag: 'a' })
}
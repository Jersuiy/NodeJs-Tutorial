// Synchronous Mode

const { readFileSync, writeFileSync } = require('fs');
// it is the same as doing const fs = require('fs'); fs.readFileSync;
console.log('start');

const first = readFileSync('../content/first.txt', 'utf8')
const second = readFileSync('../content/second.txt', 'utf8');

console.log(first, second); // Hello this is first text file Hello this is second text file

// writeFileSync() method has the functionality in creating a new file if the file that was passed in the parameter is not found on the location, and it will overwrite the values that is in the file if the file is present in the location.

// writeFileSync('./content/result-sync.txt',
//  `Here is the result : ${first}, ${second}`
//  );

// There is a third augment to passed ({flag: 'a'}) if the content in the file needed to be appended(to append to the file), instead of replacing the content with a new one in the file.
writeFileSync('../content/result-sync.txt',
    `Here is the result : ${first}, ${second}`, { flag: 'a' }
);

console.log('done with this task');
console.log('starting the next task');

const path = require('path');

// it returns the type of path separator that is being used on the operating system
console.log(path.sep); // my path separator is back slash (\) for my system

// The path.join joins a sequences of path segment using the platform specific separator
const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log(filePath); // \content\subfolder\test.txt

// getting the baseName: for example,the baseName() method gets the last name of the filepath (test.txt) that is created. Often used to extract the file name from a fully qualified path.
const base = path.basename(filePath);
console.log(base); // test.txt

// path.resolve() method returns an absolute path.
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');

console.log(absolute);
/* C:\Users\Joseph C\Desktop\NodeJs_Tutorial_1\node-express-course-main\01-node-tutorial\09-path-module\content\subfolder\test.txt */
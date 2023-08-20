// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)


//          HOW TO CREATE YOUR PROJECT FILE WITH NodeJs.
//  Reasons why we need package.json is to provide information about our project>
// package.json - manifest file (stores important information about project/package)

// manual approach (create package.json in the root, create properties etc)

// npm init (step by step press enter to skip): This is a step by step process which will ask you questions about what project is all about and how you want it to be. Eg: package name: (01-node-tutorial) joseph

// npm init -y (everything default): This will set the package.json file to default just like a empty properties value({description : }), but you make changes in the file whenever it suits to by opening the file and making changes to any property value.


// LODASH DEPENDENCIES
// The flattenDeep method spread an arrays that have other arrays ("[1, [2, [3, [4]]]])") into one array with its element.
const _ = require('lodash');
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items); // result: [ 1, 2, 3, 4 ]
console.log(newItems);
console.log(newItems);
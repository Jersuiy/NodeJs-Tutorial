const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user); //{uid: -1, gid: -1, username: 'Joseph C', homedir: 'C:\\Users\\Joseph C',shell: null}

// method returns the system uptime in seconds
console.log(`The System uptime is ${os.uptime()} seconds`);

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOS);
setInterval(() => {
    console.log('hello world')
}, 2000)
console.log(`I will run first`)
// process stays alive unless
// Kill Process CONTROL + C
// unexpected error

var num = 0;
var start = setInterval(function (data) {
    console.log(this)

    if (num > 19) {
        clearInterval(start);
        console.log('End of Process is ' + this._destroyed)
    } else
        console.log(data[0] + num);
    num++;
}, 1000, ['number']);
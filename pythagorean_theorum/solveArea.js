const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('No hypotenuse! Only base and height!');
rl.on('line', (input) => {
    let args = input.split(',');
    let answ = (args[0]*args[1])/2;
    console.log(answ);
});
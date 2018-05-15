const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', (input) => {
    let args = input.split(',');
    let answ = Math.sqrt(Math.pow(args[0], 2) + Math.pow(args[1], 2));
    console.log(answ);
});
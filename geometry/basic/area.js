const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', (input) => {
    let args = input.split(",");
    let answ = args[0]*args[1];
    console.log(answ);
});
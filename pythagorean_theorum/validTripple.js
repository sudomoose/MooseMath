const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', (input) => {
    let args = input.split(',');
    args.sort((a, b) => (a - b));
    console.log((Math.pow(args[0], 2) + Math.pow(args[1], 2) == Math.pow(args[2], 2)));
});
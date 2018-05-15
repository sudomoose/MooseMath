const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('Hypotenuse first!');
rl.on('line', (input) => {
    let args = input.split(',');
    let missingSide = Math.sqrt(Math.pow(args[0], 2) - Math.pow(args[1], 2));
    console.log(missingSide)
    let answ = (missingSide*(Math.pow(args[1], 2)))/2;
    console.log(answ);
});
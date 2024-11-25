const fs = require('fs');
let [a,b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v=>+v);

const answer = [Math.floor(a / b) + "."];

a%=b;


for(let i = 0; i < 20; i++) {
    a *= 10;
    answer.push(Math.floor(a / b));
    a %= b;
    
}

console.log(answer.join(''));
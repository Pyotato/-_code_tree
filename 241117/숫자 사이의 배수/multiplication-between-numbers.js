const fs = require('fs');
const [a,b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let i = +a;
let answer = 0;
let count = 0;

while(i<=+b){
    if(i%5===0 || i%7===0){
        answer+=i;
        count++;
    }
    i++;
}

const avg = answer/count

console.log(answer,avg.toFixed(1));
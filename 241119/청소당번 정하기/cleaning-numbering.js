const fs = require('fs');
const num = +(fs.readFileSync('/dev/stdin').toString().trim());

const clean = [0,0,0];

let day = 1;

while(day<=num){
    if(day%12===0){
        clean[2]++;
    } else if(day%3===0){
        clean[1]++;
    } else if(day%2===0){
        clean[0]++;
    }
    day++;
}

console.log(...clean);
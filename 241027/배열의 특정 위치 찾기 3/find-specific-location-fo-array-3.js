const fs = require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const num = [];

while(numbers.length>0){
    const current = +(numbers.splice(0,1)[0]);
    if(current === 0){
        break;
    }
    num.push(current);
}

const sum = num.reduce((acc,curr)=>acc+=curr,0);

console.log(sum);
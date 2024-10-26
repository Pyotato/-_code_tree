const fs = require('fs');
const allNumbers = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const numbers = [];

while(allNumbers.length>0){
    const current = +(allNumbers.splice(0,1)[0]);
    if(current === 0){
        break;
    }
    numbers.push(current);
}

const sum = numbers.reduce((acc,curr)=>acc+=(+curr),0);

console.log(sum,(sum/numbers.length).toFixed(1));
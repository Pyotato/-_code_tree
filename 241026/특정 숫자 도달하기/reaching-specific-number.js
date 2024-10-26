const fs = require('fs');
const nums = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const numbers = [];

while(nums.length>0){
    const current = +(nums.splice(0,1)[0]);
    if(current >=250){
        break;
    }
    numbers.push(current);
}

const sum = numbers.reduce((acc,curr)=>acc+=curr,0);
const avg =(sum/numbers.length).toFixed(1);

console.log(sum, avg);
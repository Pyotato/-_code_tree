const fs = require('fs');
const nums = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count3 = 0;
let count5 = 0;

while(nums.length>0){
    const num = +(nums.pop());
    if(num%3===0){
        count3++;
    }
    if(num%5===0){
        count5++;
    }
}

console.log(count3,count5);
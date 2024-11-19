const fs = require('fs');
const nums = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = 0;

while(nums.length>0){
    const num = +(nums.pop());
    if(num%2===1){
        count++;
    }
}

console.log(count);
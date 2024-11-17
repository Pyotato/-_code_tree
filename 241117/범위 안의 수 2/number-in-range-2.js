const fs = require('fs');
const nums = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = 0;
let sum = 0;

while(nums.length>0){
    const num = +(nums.splice(0,1)[0]);
    if(num>=0 && num<=200){
        count++;
        sum+=num;
    }
}

console.log(sum,(sum/count).toFixed(1));
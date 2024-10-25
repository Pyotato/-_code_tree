const fs = require('fs');
const nums = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let maxNum = -Infinity;
let minNum = Infinity;

while(nums.length>0){
    const current = +(nums.splice(0,1)[0]);

    if(current===999|| current===-999){
        break;
    }
    maxNum = Math.max(maxNum,current);
    minNum = Math.min(minNum,current);
}

console.log(maxNum, minNum);
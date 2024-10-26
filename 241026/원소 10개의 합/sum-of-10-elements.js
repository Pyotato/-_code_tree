const fs = require('fs');
const nums = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const sum = nums.reduce((acc,curr)=>acc+=(+curr),0);

console.log(sum)
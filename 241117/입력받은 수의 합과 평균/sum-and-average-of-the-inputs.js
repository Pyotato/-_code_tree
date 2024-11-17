const fs = require('fs');
const [n,...nums] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const count = +n;
const sum = nums.reduce((acc,curr)=>acc+=(+curr),0);

console.log(sum,(sum/count).toFixed(1));
const fs = require('fs');
const [n,numbers] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const nums = numbers.split(' ').map(v=> +v);
let minDifference = Infinity;

while(nums.length>0){
    let current = nums.pop();
    const differences = nums.map(v=>Math.abs(current-v)) ;
    minDifference = Math.min(...differences,minDifference);
}

console.log(minDifference)
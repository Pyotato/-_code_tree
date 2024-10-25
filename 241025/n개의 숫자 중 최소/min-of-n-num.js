const fs = require('fs');
const [N, nums] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numbers = [...new Set(nums.split(' '))].map(v => +v);
const minNum = Math.min(...numbers);


const countAppearance = (target)=>{
    const regex = new RegExp(`${target} `,'g');
    return nums.split(' ').join(' ').match(regex).length;
} 

console.log(minNum, countAppearance(minNum));
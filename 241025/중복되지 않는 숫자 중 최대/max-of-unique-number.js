const fs = require('fs');
const[N,nums] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numbers = nums.split(' ').reduce((acc,curr)=>{
    if(!acc[curr]){
        acc[curr] = 1;
    } else {
        acc[curr]++;
    }
    return acc;
},{});

const maxNum = Math.max(...Object.keys(numbers).map(v=>+v));
console.log(numbers[maxNum]>1 ? -1 : maxNum);
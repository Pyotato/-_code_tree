const fs = require('fs');
let [...nums] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>+v);


const allIsDivisbleByThree = (arr)=>{
    return arr.every(v=>v%3===0)? 1 : 0;
}

console.log(allIsDivisbleByThree(nums));
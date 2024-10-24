const fs = require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const answer = numbers.map(v=>v.split(' ').reduce((acc,curr)=>{
    acc+= (+curr);
    return acc;
},0)).join('\n');

console.log(answer);
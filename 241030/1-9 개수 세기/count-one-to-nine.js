const fs = require('fs');
const [n,numbers] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const answer = numbers.split(' ').reduce((acc,curr)=>{
    if(acc?.[curr]==null){
        acc[curr] = 1;
    } else {
        acc[curr]++;
    }
    return acc;
},{});

console.log(Array.from({length:9},(_,i)=>answer[i+1]==null?0:answer[i+1]).join('\n'));
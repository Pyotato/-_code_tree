const fs = require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const answer = numbers.reduce((acc,curr)=>{
    if(acc?.[curr]==null){
        acc[curr] = 1;
    } else {
         acc[curr]++;
    }
    return acc;
},{});

console.log(Array.from({length:6},(_,i)=> `${i+1} - ${answer[i+1]==null?0:answer[i+1]}`).join('\n'));
const fs = require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const answer = [];

while(numbers.length>0){
    const current = +(numbers.splice(0,1));
    if(current===0){
        break;
    }
    current%2===0? answer.push(current/2): answer.push(current+3);
}

console.log(...answer);
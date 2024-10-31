const fs = require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const scores = {};

while(numbers.length>0){
    const current = +(numbers.splice(0,1)[0]);
    if(current===0){
        break;
    }
    const scoreRange =  Math.floor(current/10)*10;
    if(scores?.[scoreRange]==null){
        scores[scoreRange] = 1;
    } else {
        scores[scoreRange]++;
    }
}

console.log(Array.from({length:10},(_,i)=>`${(i+1)*10} - ${scores[(i+1)*10]==null? 0: scores[(i+1)*10]}`).reverse().join('\n'));
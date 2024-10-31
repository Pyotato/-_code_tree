const fs = require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const scores = {};

while(numbers.length>0){
    const current = Math.floor((+(numbers.splice(0,1)[0]))/10)*10;
    if(current===0){
        break;
    }
    if(scores?.[current]==null){
        scores[current] = 1;
    } else {
        scores[current]++;
    }
}

console.log(Array.from({length:10},(_,i)=>`${(i+1)*10} - ${scores[(i+1)*10]==null? 0: scores[(i+1)*10]}`).reverse().join('\n'));
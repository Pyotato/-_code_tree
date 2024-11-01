const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

let counter = 1;

const answer = [];

while(counter<n){
    answer.push(''.padStart(counter*2,'* '));
    answer.push(''.padStart((n-counter+1)*2,'* '));
    counter++;
    if(counter>(n-counter+1)){
        break;
    }
}



console.log([...answer,...answer.slice(0,answer.length-2).reverse()].join('\n'));
const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());


let counter = 0;

while(counter<n){
    console.log(''.padStart(2*(n-(counter+1)),' ')+''.padStart(2*(2*(counter)+1),'* '));
    counter++;
}
const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

let counter = 0;

while(counter<n){
    console.log(counter%2===0?'*':''.padStart(counter*2+1,'* '))
    counter++;
}
const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

let counter = n;

let i = 0;

while(counter>0){
    console.log(''.padStart(2*i,'  ')+''.padStart(2*(2*counter-1),'* '));
    counter--;
    i++;
}
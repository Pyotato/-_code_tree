const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

let count = 0;
while(count<n){
    console.log(''.padStart(2*count+1,'*'));
    count++;
}
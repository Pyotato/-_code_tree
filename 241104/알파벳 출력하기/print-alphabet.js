const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

let count = 0;
let startChar = 'A'.charCodeAt(0);

while(count<n){
    console.log(Array.from({length:count+1},()=>String.fromCharCode(startChar++)).join(''))
    count++;
}
const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());
// n = 1 => 1 
// n = 2 => 2 1
// n = 3 => 3 1 2
// n = 4 => 4 1 3 2
// n = 5 => 5 1 4 2 3

let count = n;
let counter = 1;
while(count>0){
    console.log(''.padStart(count*2,'* '));
    count--;
    console.log(''.padStart(counter*2,'* '));
    ++counter;
}
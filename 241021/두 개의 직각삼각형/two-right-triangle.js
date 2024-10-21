const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());
let count = 0;

while(count<n){
    console.log(''.padStart(n-count,'*')+''.padEnd(2*count,count===0?'':' ')+''.padEnd(n-count,'*'))
    count++;
}
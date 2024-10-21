const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());
let count = 1;
let stars = [];
while(count<=n){
    stars.push(''.padStart(count,'*')+'\n\n');
    count++;
}

console.log([...stars,...stars.reverse().slice(1,stars.length)].join(''));
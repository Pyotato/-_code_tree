const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

const horizontal = ''.padStart(2*(2*n+1),'* ');
const vertical = ''.padStart(2*(2*n+1),'*   ');

let count = 0;

while(count<2*n+1){
    console.log(count%2===0? horizontal:vertical);
    count++;
}
const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

let counter = 1;

while(counter<=n){
    console.log(''.padStart(2*counter,`${counter} `));
    counter++;
}
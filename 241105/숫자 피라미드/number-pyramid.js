const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

let counter = 1;

while(counter<=n){
    console.log(...Array.from({length:counter},()=>counter));
    counter++;
}
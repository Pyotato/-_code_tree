const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

let i = 1;
let counter = i;

while(i<=n){
    console.log(...Array.from({length:i},()=>counter++));
    i++;
}
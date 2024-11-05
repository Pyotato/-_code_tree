const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

let i = 1;

while(i<=n){
    console.log(...Array.from({length:i},(_,j)=>i*(j+1)))
    i++;
}
const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

let i = n;
while(i>0){
    console.log(...Array.from({length:n-i},()=>' '),...Array.from({length:i},(_,j)=>i-j));
    i--;
}
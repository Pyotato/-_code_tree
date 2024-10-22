const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());
let count = 9;
const arr = Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>{
    if(count>0){
        return count--;
    } else {
        count = 9;
        return count--;
    }
}).join(''));

console.log(arr.join('\n'));
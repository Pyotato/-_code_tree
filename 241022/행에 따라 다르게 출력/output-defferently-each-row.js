const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

let count = 0;
const arr = Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>{
    if(i%2===0){
        return ++count;
    } else {
        return count+=2;
    }
}).join(' '));

console.log(arr.join('\n'))
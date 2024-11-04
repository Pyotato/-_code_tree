const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

const arr = Array.from({length:n%2===0?n:2*Math.ceil(n/2)},(_,i)=>Array.from({length: 2*n-1},(_,j)=>{
    if(i==0){
        return j%2===0? '*':' ';
    } else {
        if(j%2===0 && j%4!==0 && i<=j/2){
            return '*';
        } else {
            return ' ';
        }
    }
}).join(''));

console.log(arr.join('\n'));
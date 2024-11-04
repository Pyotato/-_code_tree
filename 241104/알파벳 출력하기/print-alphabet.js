const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

let count = 0
const A = 'A'.charCodeAt(0);
const Z = 'Z'.charCodeAt(0);
let startChar = A;

while(count<n){
    console.log(Array.from({length:count+1},()=>{
        if(startChar-1===Z){
            startChar = A;
             return String.fromCharCode(startChar);
        }
        return String.fromCharCode(startChar++)
        }).join(''))
    count++;
}
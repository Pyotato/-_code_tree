const fs = require('fs');
const ns = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = 0;

while(ns.length>0){
    let n = +(ns.pop());
    if(n%3===0 && n%2==1){
        count+=n;
    }
}

console.log(count);
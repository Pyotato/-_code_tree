const fs = require('fs');
const arr = [...fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v=>+v),...Array.from({length:8},()=>null)];

const doubledPrevious = [];

while(arr.length>0){
    let current = arr.splice(0,1)[0];
    if(current!=null){
        doubledPrevious.push(current);
    } else {
        let [a,b] = doubledPrevious.slice(doubledPrevious.length-2,doubledPrevious.length);
        const next = b+2*a;
        doubledPrevious.push(next);
    }
}

console.log(doubledPrevious.join(' '));
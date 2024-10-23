const fs = require('fs');
let [a,b] = [...fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v=>+v),...Array.from({length:8},()=>null)];

const quotients = [];

while(a>1){
    quotients.push(a%b);
    a = Math.floor(a/b);
}

const quotientCount = quotients.reduce((acc,curr)=>{
    if(acc[curr]==null){
        acc[curr] = 1;
    } else {
        acc[curr] ++;
    }
    return acc;
},{});

const sumOfSquares = Object.values(quotientCount).reduce((acc,curr)=>{
    acc+=curr**2;
    return acc;
},0);

console.log(sumOfSquares);
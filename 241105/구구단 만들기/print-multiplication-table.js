const fs = require('fs');
const [a,b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let count = 1;


while(count<=9){
    let j = count++;
    console.log(Array.from({length:a===b?1:(+b-(+a))/2},(_,k)=>`${2*((+b)/2-k)} * ${j} = ${(2*((+b)/2-k))*j}`).join(' / '));
}
const fs = require('fs');
const [a,b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let count = 1;
const evenNums = Array.from({length:b-a+1},(_,i)=>i++).filter(v=>v%2===0);

while(count<=9){
    let j = count++;
    console.log(Array.from({length:evenNums.length},(_,k)=>`${2*((+b)/2-k)} * ${j} = ${(2*((+b)/2-k))*j}`).join(' / '));
}
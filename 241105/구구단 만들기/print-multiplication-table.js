const fs = require('fs');
const [a,b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let i = b;
let count = 1;


while(count<=9){
    let j = count++;
    console.log(Array.from({length:b/2},(_,k)=>`${2*(b/2-k)} * ${j} = ${(2*(b/2-k))*j}`).join(' / '));
}
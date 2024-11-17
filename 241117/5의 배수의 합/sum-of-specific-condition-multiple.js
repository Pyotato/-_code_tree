const fs = require('fs');
const [a,b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').sort((a,b)=>(+a)-(+b));

let i = +a;
let answer = 0;

while(i<=+b){
    if(i%5 === 0){
        answer+=i;
    }
    i++;
}

console.log(answer);
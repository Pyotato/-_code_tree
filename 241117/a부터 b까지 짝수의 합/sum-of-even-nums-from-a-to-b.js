const fs = require('fs');
const [a,b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v=>+v);

let i = a;
let count = 0;

while(i<=b){
    if(i%2===0){
        count+=i;
    }
    i++;
}

console.log(count);
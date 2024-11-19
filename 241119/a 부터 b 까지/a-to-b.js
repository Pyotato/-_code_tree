const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v=>+v);

let num = a;
const arr = [num];

while(num<=b){
    if(num%2===0){
        num+=3;
    }else {
        num*=2;
    }
    if(num>b){
        break;
    }
    arr.push(num);
}

console.log(...arr);
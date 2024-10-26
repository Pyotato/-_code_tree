const fs = require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const reversed = [];

while(numbers.length>0){
    const current = +(numbers.splice(0,1)[0]);
    if(current===0){
        break;
    }
    reversed.splice(0,0,current);
}

console.log(reversed.join(' '));
const fs = require('fs');
const allNumbers = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const evenNumbers = [];

while(allNumbers.length>0){
    const current = +(allNumbers.splice(0,1)[0]);
    if(current === 0){
        break;
    }
    if(current%2 === 0){
        evenNumbers.push(current);
    }
   
}

const sum = evenNumbers.reduce((acc,curr)=>acc+=curr,0);

console.log(evenNumbers.length, sum);
const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

const numbers = Array.from({length:n},(_,i)=>(i+1));

const primeNumbers = numbers.filter((num)=>{
    let counter = 2;
    if(num===2){
        return true;
    }
    if(num===1 || num%2===0){
        return false;
    }
    while(counter<num){
        if(num%counter===0){
            return false;
        }
        counter++;
    }
    return true;
})

console.log(...primeNumbers);
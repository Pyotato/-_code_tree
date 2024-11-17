const fs = require('fs');
const num = +(fs.readFileSync('/dev/stdin').toString().trim());

const isCompleteNumber = (n)=> {
    const commonDivisers = new Set();
    for(let i=1;i<=n/2;i++){
        if(n%i===0){
            commonDivisers.add(i);
        }
    }
    const sum = [...commonDivisers].reduce((acc,curr)=>acc+=curr,0);
    return sum===n ?'P':'N';
}

console.log(isCompleteNumber(num))
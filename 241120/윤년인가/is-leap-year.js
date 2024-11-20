const fs = require('fs');
const y = +(fs.readFileSync('/dev/stdin').toString().trim());

const isLeapYear = (n)=>{
    if(n%100===0 && n%400!==0){
        return false;
    }
    return n%4===0;
}

console.log(isLeapYear(y));
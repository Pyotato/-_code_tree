const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

const daysInNonLeapYear = (y)=>{
    if(y===2){
        return 28;
    }
    if(y%2===1 && y<=7){
        return 31;
    }
    if(y%2==0 && y>=8){
        return 31;
    }
    return 30;
}

console.log(daysInNonLeapYear(n));
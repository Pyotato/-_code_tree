const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

let leapYearCount = 0;
let year = 1;

while(year<=n){
    if(year%4===0 ){
        if(year%100===0 && year%400!==0){
            year++;
            continue;
        }
        leapYearCount++;
    }
    year++;
}

console.log(leapYearCount);
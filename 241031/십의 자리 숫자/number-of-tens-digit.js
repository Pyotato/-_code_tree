const fs = require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const count = {};

while(numbers.length>0){
   const current = +(numbers.splice(0,1)[0]);
    if(current===0){
        break;
    }
    const tenthPlaceNum = Math.floor(current/10);
    if(count?.[tenthPlaceNum]==null){
        count[tenthPlaceNum] = 1;
    } else {
        count[tenthPlaceNum]++;
    }
}

console.log(Array.from({length:9},(_,i)=>`${i+1} - ${count[i+1]==null?0:count[i+1]}`).join('\n'));
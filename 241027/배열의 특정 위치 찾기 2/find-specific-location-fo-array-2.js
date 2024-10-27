const fs = require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const sums = numbers.reduce((acc,curr,index)=>{
    // 짝수라면
    if((index+1)%2===0){
        acc.even+=(+curr);
    } else {
        acc.odd+=(+curr);
    }
    return acc;
},{even:0,odd:0});


console.log(Math.abs(sums.even-sums.odd));
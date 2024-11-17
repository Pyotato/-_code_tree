const fs = require('fs');
const nums = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const isOddOrEven = (n)=>{
    return (+n)%2===0?'even':'odd'
}

while(nums.length>0){
    const num =  nums.splice(0,1)[0];
    console.log(isOddOrEven(num));
}
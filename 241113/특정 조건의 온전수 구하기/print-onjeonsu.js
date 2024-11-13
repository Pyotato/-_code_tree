const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

const arr= Array.from({length:n},(_,i)=>i+1);

const isPerfectNum = (n)=>{
    if(n%2===0 || n%10===5 || (n%3===0 && n%9!==0)){
        return false;
    }
    return true;
}

const filtered = arr.filter((num)=>isPerfectNum(num));

console.log(...filtered);
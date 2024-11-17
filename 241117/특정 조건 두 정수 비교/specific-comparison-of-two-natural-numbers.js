const fs = require('fs');
const [a,b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const compareNums = (a,b)=>{
    if(a===b){
        return '0 1'
    }
    return a<b? '1 0':'0 1'
}

console.log(compareNums(+a, +b));
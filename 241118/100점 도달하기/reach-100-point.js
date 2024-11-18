const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim().split(' '));

const letterGrade = (n)=>{
    if(n>=90){
        return 'A';
    }
    if(n>=80){
        return 'B';
    }
    if(n>=70){
        return 'C';
    }
    if(n>=60){
        return 'D';
    }
    return 'F';
}

console.log(...Array.from({length:100-n+1},(_,i)=>letterGrade(n+i)));
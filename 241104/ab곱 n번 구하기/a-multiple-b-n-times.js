const fs = require('fs');
const [n,...abs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

while(abs.length>0){
    const [a,b] = abs.splice(0,1)[0].split(' ');
    const mult = Array.from({length:(+b)-(+a)+1},(_,i)=>(+a)+i).reduce((acc,curr)=>{
        acc*=curr;
        return acc;
    },1);
    console.log(mult);
}
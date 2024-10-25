const fs = require('fs');
const [m,...ns] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = 0;

while(ns.length>0){
    let n = +(ns.splice(0,1)[0]);
    while(n>=1){
        if(n===1){
            console.log(count);
            break;
        }
        if(n%2===0){
            n/=2;
        } else {
            n = 3*n+1;
        }
        count++;
    }
    count = 0;
}
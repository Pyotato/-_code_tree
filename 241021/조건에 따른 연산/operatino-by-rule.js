const fs = require('fs');
let n = +(fs.readFileSync('/dev/stdin').toString().trim());


const getCount = (n)=>{
    let cnt = 0;
    while(n<1_000){
        if(n%2===0){
            n = n*3+1;
        } else {
            n = n*2+2;
        }
        cnt++;
        if(n>1_000){
            return cnt;
        }
    }
}

console.log(getCount(n));
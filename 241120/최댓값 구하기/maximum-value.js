const fs = require('fs');
const [a, b, c]= fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v);

const maxNum = (a,b,c) =>{
    if(a>=b && a>=c){
        return a;
    }
    if(b>=a && b>=c){
        return b;
    }
    if(c>=a && c>=b){
        return c;
    }
}

console.log(maxNum(a,b,c));
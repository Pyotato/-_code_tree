const fs = require('fs'); 
const cases = [fs.readFileSync(0).toString().trim().split(' ').map(Number)];
let count = [];

const isConsecutive = (a,b,c) => {
    return a+1 == b && b+1 ===c;
}

let num = 0;

while(cases.length>0){
    const [a,b,c]= cases.pop();
    // a이동
    if(c-b>=2){
        num++;
        if(isConsecutive(b,b+1,c)){
            count.push(num);
            num=0;
        } else {
            cases.push([b,b+1,c]);
        }
        
    }
    // c이동
    if(b-a>=2){
        num++;
        if(isConsecutive(a,b-1,b)){
            count.push(num);
            num=0;
        } else {
            cases.push([a,b-1,b]);
        }
    }
}

console.log(Math.min(...count));
console.log(Math.max(...count));

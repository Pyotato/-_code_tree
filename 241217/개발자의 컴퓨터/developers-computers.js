const fs = require('fs'); 
const [_,...usage] = fs.readFileSync(0).toString().trim().split('\n');

const sorted = usage.map(v => v.split(' ').map(Number)).sort((a,b)=>a[0]-b[0]);
const start = sorted.splice(0,1)[0];

const isOverlapping = (prevE,currS)=>{
    if(prevE<currS){
        return false;
    } else {
        return true;
    }
}

const answer = sorted.reduce((acc,curr)=>{
    const [s, t, b] = curr;
    const [prevS,prevE] = acc.range;
    if(isOverlapping(prevE,s)){
        acc.range = [prevS,t];
        acc.count += b;
    } else {
        acc.count = Math.max(b,acc.count);
    }
    return acc;
}, {range:start.slice(0,2),count:0});

console.log(answer.count);
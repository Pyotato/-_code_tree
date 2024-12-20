const fs = require('fs');
const [A,B]  = fs.readFileSync(0).toString().trim().split('\n');

const str = B.split('');

const indexes = str.map(v => A.indexOf(v));

let temp;

const slices = indexes.reduce((acc,curr,i)=>{
    if(i===0 || temp>=curr){
        acc.push([curr]);
        temp = curr;
        return acc;
    } else {
        const prev = acc.pop();
        temp = curr;
        prev.push(curr);
        acc.push(prev);
    }
    return acc;
},[])

console.log(slices.length);
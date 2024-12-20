const fs = require('fs');
const [A,B]  = fs.readFileSync(0).toString().trim().split('\n');

const str = B.split('');

const indexes = str.map(v => A.indexOf(v));
let count = 1;

const inOrder = (arr)=>{
    const copy = [...arr];
    copy.sort((a,b)=>a-b);
    return copy.join(',') === arr.join(',');
}

while(indexes.length>0){
    if(inOrder(indexes)){
        break;
    } else {
        count++;
    }
    indexes.shift();
}

console.log(count);
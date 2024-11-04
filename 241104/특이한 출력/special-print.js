const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

const arr = Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>`${i+1} ${j+1}`)).flat();

let temp = [];

const answer = [];

while(arr.length>0){
    let [i,j] = arr.splice(0,1)[0].split(' ');
    if(((+i)+(+j))%4===0){
        temp.push(`(${i}, ${j})`);
        answer.push(temp.join(" "));
        temp= [];
    }else {
        temp.push(`(${i}, ${j})`);
    }
}

console.log(answer.join('\n'));
console.log(...temp);
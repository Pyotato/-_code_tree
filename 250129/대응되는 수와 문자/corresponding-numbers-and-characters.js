const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n,m] = input.shift().split(' ').map(Number);
const str = input.splice(0,n);

const map = new Map();

str.forEach((v,i)=>{
    map.set(v,`${i+1}`);
    map.set(`${i+1}`,v);
});

const answer = input.map(v=>map.get(v));

console.log(answer.join('\n'));
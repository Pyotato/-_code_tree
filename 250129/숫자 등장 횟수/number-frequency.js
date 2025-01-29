const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const strToNumArr = (str) => {
    return str.split(' ').map(Number);
}

input.shift();

const map = new Map();

strToNumArr(input.shift()).forEach((v)=>{
    !map.has(v)?map.set(v,1):map.set(v,map.get(v)+1);
})

const ans = strToNumArr(input.shift()).map(v => map.has(v)?map.get(v):0);

console.log(...ans);
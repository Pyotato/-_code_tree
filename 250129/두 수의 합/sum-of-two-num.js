const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n,k] = input.shift().split(" ").map(Number);
const nums = input[0].split(' ').map(Number);
const map = new Map();

nums.forEach((v,i) => map.has(v)? map.set(v,[...map.get(v),i]):map.set(v,[i]))

const set = new Set();

let count = 0;

for(let key of map.keys()){
    const other = k-key;
    if(map.has(other) && !set.has([other,key].sort().join(' '))){
        set.add([other,key].sort().join(' '));
        count+=(map.get(key).length*map.get(other).length);
    }
}
console.log(count);

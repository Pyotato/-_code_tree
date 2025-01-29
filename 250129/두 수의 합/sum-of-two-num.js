const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n,k] = input.shift().split(" ").map(Number);
const nums = input[0].split(' ').map(Number);

const set = new Set();

for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
        if(nums[i] + nums[j]===k){
            set.add(`(${i}, ${j})`);
        }
    }
}

console.log(set.size);
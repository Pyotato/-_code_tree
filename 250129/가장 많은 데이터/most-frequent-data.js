const fs = require("fs");
const [n,...str] = fs.readFileSync(0).toString().trim().split("\n");

const map = new Map();

str.forEach(v=>{
    !map.has(v)? map.set(v,1):map.set(v,map.get(v)+1);
});

console.log(Math.max(...map.values()));
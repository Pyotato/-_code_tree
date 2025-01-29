const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
input.shift();
const hashMap = new Map();

const commands = {
    'add' :(k,v) => {
        hashMap.add(v);
    },
    'remove' :(k) => {
        hashMap.delete(k);
    },
    'find': (k) =>{
        console.log(hashMap.has(k)?hashMap.get(k): "None");
    }
}


for(let command of input){
    const [c,k,v] = command.split(' ');
    commands[c](k,v);
}
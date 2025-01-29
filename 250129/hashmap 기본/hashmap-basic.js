const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
input.shift();
const hashMap = {};

const commands = {
    'add' :(k,v) => {
        hashMap[k] = v;
    },
    'remove' :(k) => {
         delete hashMap[k];
    },
    'find': (k) =>{
        console.log(hashMap[k]==null? "None": hashMap[k])
    }
}


for(let command of input){
    const [c,k,v] = command.split(' ');
    commands[c](k,v);
}
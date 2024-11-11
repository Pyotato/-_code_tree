const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

console.log(n**2);

if(n<5){
    console.log('tiny');
}
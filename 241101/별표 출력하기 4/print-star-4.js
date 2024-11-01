const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

let counter = n;

while(counter>0){
    console.log(''.padStart(2*(counter),'* '));
    if(counter===1){
        break;
    }
    counter--;
}

while(counter<n){
    console.log(''.padStart(2*(counter+1),'* '));
    counter++;
}
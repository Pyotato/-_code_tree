const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

let counter = 0;

while(counter<n){
    console.log(''.padStart(2*(counter+1),'* '))
    counter++;
}
while(counter>0){
    console.log(''.padStart(2*(counter-1),'* '))
    counter--;
}
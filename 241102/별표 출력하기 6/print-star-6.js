const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

let counter = n;

while(counter>0){
    console.log(''.padStart(2*(n-counter),' ')+''.padStart((2*counter-1)*2,'* '))
    counter--;
}

counter+=2;

while(counter<=n){
    console.log(''.padStart(2*(n-counter),' ')+''.padStart((2*counter-1)*2,'* '))
    counter++;
}
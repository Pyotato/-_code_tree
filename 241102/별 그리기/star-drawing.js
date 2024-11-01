const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

let counter = 1;

while(counter<=n){
    console.log(''.padStart(n-counter,' ')+''.padStart(counter*2-1,'*'));
    counter++;
}

counter-=2;

while(counter>0){
    console.log(''.padStart(n-counter,' ')+''.padStart(counter*2-1,'*'));
    counter--;
}
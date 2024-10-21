const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

let count = 0;

while(count<n){
    console.log(''.padStart(n-(count+1),' ')+''.padStart(2*(count+1),'* '));
    count++;
}
while(count>0){
    console.log(''.padStart(n-count+1,' ')+''.padStart(2*(count-1),'* '));
    count--;
}
const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());
// n = 1 => 1 
// n = 2 => 2 1
// n = 3 => 3 1 2
// n = 4 => 4 1 3 2
// n = 5 => 5 1 4 2 3

const stars = Array.from({length:n},(_,i)=>{
    if(i===0){
        return ''.padStart(2*n,'* ');
    }
    if(i%2===0){
        return ''.padStart(2*(n-i+1),'* ');
    } else {
        return ''.padStart(2*i,'* ');
    } 
});

console.log(stars.join('\n')+'\n'+[...stars].reverse().join('\n'));
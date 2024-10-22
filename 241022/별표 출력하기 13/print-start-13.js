const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());
// n = 1 => 1 
// n = 2 => 2 1
// n = 3 => 3 1 2
// n = 4 => 4 1 3 2
// n = 5 => 5 1 4 2 3

const stars = [''.padStart(2*n,'* '), ...Array.from({length:n-1},(_,i)=>{
     if(i<=1){
        return i===0? ''.padStart((i+1)*2,'* '): ''.padStart((n-i)*2,'* ');
    }
    else if(i%2===0){
        return ''.padStart(i*2,'* ');
    } else {
        return ''.padStart((n-(i-1))*2,'* ');
    }
})];

console.log(stars.join('\n')+'\n'+[...stars].reverse().join('\n'));
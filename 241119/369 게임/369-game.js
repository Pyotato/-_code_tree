const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

const arr = Array.from({length:n},(_,i)=>{
    const regex = new RegExp(/[3|6|9]{1,}/,'g');
    if((i+1)%3===0 || `${(i+1)}`.match(regex)!=null){
        return 0;
    }
    return i+1
});

console.log(...arr);
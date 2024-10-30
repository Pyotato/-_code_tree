const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

let count = n%5===0?2: 10;
const answer = Array.from({length:count},(_,i)=>n*(i+1));

    console.log(...answer);
const fs = require('fs');
const char = fs.readFileSync('/dev/stdin').toString().trim();

const str = ['L', 'E', 'B', 'R', 'O', 'S'];

const answer = str.indexOf(char) 

console.log(answer<0?'None':answer);
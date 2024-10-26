const fs = require('fs');
const scores = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const average = (scores.reduce((acc,curr)=>acc+=(+curr),0)/scores.length).toFixed(1);

console.log(average);
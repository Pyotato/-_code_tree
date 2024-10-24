const fs = require('fs');
const [_,strNums] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let numbers = strNums.split(' ').map(v => +v);

const answer = [];

while(numbers.length>0){
    const maxIndex = numbers.indexOf(Math.max(...numbers));
    if(maxIndex+1===1){
        answer.push(maxIndex+1);
        break;
    }
    answer.push(maxIndex+1);
    numbers = numbers.slice(0, maxIndex);
}
console.log(answer.join(' '));
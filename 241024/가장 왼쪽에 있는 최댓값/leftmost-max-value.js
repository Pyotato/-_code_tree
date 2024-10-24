const fs = require('fs');
const [_,strNums] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numbers = strNums.split(' ').map(v => +v);

const answer = [];

while(numbers.length>0){
    const maxIndex = numbers.indexOf(Math.max(...numbers));
    answer.push(maxIndex+1);
    numbers.splice(0, maxIndex);
    if(maxIndex+1===1){
        break;
    }
}
console.log(answer.join(' '));
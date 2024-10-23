const fs = require('fs');
const [...numbers] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let counter = 0;

while(counter<numbers.length){
    const [prev, current] = numbers.slice(counter,counter+2);
    if(current%3 ===0||prev%3 === 0){
        console.log(numbers[counter]);
        break;
    }
    counter++;
}
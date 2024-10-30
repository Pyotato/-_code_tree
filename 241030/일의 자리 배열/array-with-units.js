const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let answer = [+a,+b];

while(answer.length<10){
    const [prev1,prev2] = answer.splice(answer.length-2,answer.length); 
    answer = [...answer,prev1,prev2,(prev1+prev2)%10];
    if(answer.length===10){
        break;
    }
}

console.log(...answer);
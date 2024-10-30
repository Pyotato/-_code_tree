const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

let answer =[1,n];

while(answer.length>0){
    const [curr1,curr2] = answer.splice(answer.length-2,2);
    const next = curr1+curr2;
    answer = [...answer,curr1,curr2,next];
    if(next>=100){
        break;
     }
}

console.log(...answer);
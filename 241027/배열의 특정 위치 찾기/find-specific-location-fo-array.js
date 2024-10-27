const fs = require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const answers = numbers.reduce((acc,curr,index)=>{
    if(index%2===1){
        acc.evenSum+=(+curr);
    }
    if((index+1)%3===0){
        acc.threes.push(+curr);
    }
    return acc;
},{evenSum:0,threes:[]});

const sum = answers.threes.reduce((acc,curr)=>acc+=curr,0);

console.log(answers.evenSum,(sum/(answers.threes.length)).toFixed(1));
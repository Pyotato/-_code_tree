const fs = require('fs');
const [_, ...scores] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const hasPassed = (score)=> score >= 60? 'pass': 'fail';
let passCount = 0;

while(scores.length>0){
    const currentScore = (scores.splice(0,1)[0]).split(' ');
    const avg = (currentScore.reduce((acc,curr)=>acc+=(+curr),0))/currentScore.length;
    console.log(hasPassed(avg));
    if(hasPassed(avg)==='pass'){
        passCount++;
    }
}
console.log(passCount);
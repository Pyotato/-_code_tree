const fs = require('fs'); 
const [N,...nums] = fs.readFileSync(0).toString().trim().split('\n');

const numSeq = nums.map(Number);
const setArr = [...numSeq.reduce((acc,curr)=>{
            if(!acc.has(curr)){
                acc.add(curr);
            }
            return acc;
        },new Set())];
const sorted = [...setArr].sort((a,b)=>a-b);

const isSpecialSequence = (arr)=>{
    const sorted = [...arr].sort((a,b)=>a-b).join('');
    return sorted === arr.join('');
}

let answer = 0;

for(let i=0;i<+N;i++){
    const copy = [...setArr];
    copy.splice(i,1);
    if(isSpecialSequence(copy)){
        answer = i-1;
    }
    
}

console.log(answer)
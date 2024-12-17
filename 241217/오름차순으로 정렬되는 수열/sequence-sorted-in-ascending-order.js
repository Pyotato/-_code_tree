const fs = require('fs'); 
const [N,...nums] = fs.readFileSync(0).toString().trim().split('\n');

const numSeq = nums.map(Number);

const filterReplicants = (arr)=>{
    return [...arr].reduce((acc,curr)=>{
    if(acc.length===0){
        acc.push(curr);
        return acc;
    }
    if(acc[acc.length-1]!=curr){
        acc.push(curr);
    }
    return acc;
},[]);
}


const setArr = filterReplicants(numSeq);
const sorted = [...setArr].sort((a,b)=>a-b);

const isSpecialSequence = (arr)=>{
    const sorted = [...arr].sort((a,b)=>a-b).join('');
    return sorted === arr.join('');
}

let answer = 0;

const filtered =filterReplicants(sorted);

for(let i=0;i<+N;i++){
    const copy = [...setArr];
    const spliced = copy.splice(i,1)[0];
    if(isSpecialSequence(copy)){
        const sortedIndex = filtered.indexOf(spliced);
        const currentIndex = i;
        if(currentIndex<sortedIndex){
            for(let j=currentIndex;j<=sortedIndex;j++){
                if(setArr[j+1]!=spliced){
                    answer++;
                }
            }
        } else {
            for(let j=sortedIndex;j<=currentIndex;j++){
                if(setArr[j]!=spliced){
                    answer++;
                }
            }
        }
    }
}

console.log(answer); 
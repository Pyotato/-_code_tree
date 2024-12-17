const fs = require('fs'); 
const [_,...nums] = fs.readFileSync(0).toString().trim().split('\n');

const numSeq = nums.map(Number);

let answer = 0;

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


const replicantFiltered = filterReplicants(numSeq);
const sorted = [...replicantFiltered].sort((a,b)=>a-b);

const isSpecialSequence = (arr)=>{
    const sorted = [...arr].sort((a,b)=>a-b).join('');
    return sorted === arr.join('');
}

const nearestIndex = (num,arr,numIndex)=>{
    const indexArr = [];
    arr.forEach((v,i)=>{
        if(v===num){
            indexArr.push(i)
        }
    });
    return Math.min(...indexArr.map(v=>Math.abs(v-numIndex)));
}


for(let index in replicantFiltered){
    const copy = [...replicantFiltered];
    copy.splice(index,1);
    if(isSpecialSequence(copy)){
        const num = replicantFiltered[index];
        answer = nearestIndex(num,sorted,index);
        
    }
}

console.log(answer);
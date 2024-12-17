const fs = require('fs'); 
const [_,...nums] = fs.readFileSync(0).toString().trim().split('\n');

const numSeq = nums.map(Number);

let answer = 0;

// 연속적으로 중복된 수는 하나만 두고 제거하는 함수
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

// 중복 제거
const replicantFiltered = filterReplicants(numSeq);
// 정렬된 상태
const sorted = [...replicantFiltered].sort((a,b)=>a-b);

// 특별한 수열인지 아닌지
const isSpecialSequence = (arr)=>{
    const sorted = [...arr].sort((a,b)=>a-b).join('');
    return sorted === arr.join('');
}

// 옮겨야하는 수 num이 정렬을 위한 가장 적은 움직임 횟수
// numIndex는 현재 정렬 전 배열에서의 위치
const nearestIndex = (num,arr,numIndex)=>{
    const indexArr = [];
    arr.forEach((v,i)=>{
        if(v===num){
            indexArr.push(i)
        }
    });
    return Math.min(...indexArr.map(v=>Math.abs(v-numIndex)));
}

// 배열의 인덱스를 순회하며 하나씩 제거하여 
// 해당 배열이 특별한 수열이라면 그 인덱스의 수를 옮겨야한다는 것
// 해당 인덱스에서 정렬시 이동시켜야할 가장 가까운 인덱스 자리를 answer로
for(let index in replicantFiltered){
    const copy = [...replicantFiltered];
    copy.splice(index,1);
    if(isSpecialSequence(copy)){
        const num = replicantFiltered[index];
        answer = nearestIndex(num,sorted,index);
    }
}

console.log(answer);
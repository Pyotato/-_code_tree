const fs = require('fs');

const [nm,...numbers] = fs.readFileSync(0).toString().trim().split('\n');
const grid = numbers.map(v=>v.split(' ').map(Number));

const isConsecutive = (arr,m)=>{
    const copy = [...arr];
    let current = copy.shift();
    let seq = new Set();
    while(copy.length>0){
        let next = copy.shift();
        if(next-current===1){
            seq.add(current);
            seq.add(next);
        } else {
            seq = new Set([next]);
        }
        current = next;
    }
   return seq.size>=m;
}

const isHappySeq = (arr,m)=>{
    const nums = arr.reduce((acc,curr,i)=>{
        if(acc[curr]==null){
            acc[curr] = [i];
        } else {
            acc[curr].push(i);
        }
        return acc;
    },{});
    const filtered = Object.values(nums).filter((v)=>v.length>=m).flat();
    return filtered.length === 0 || filtered.length < m ? false:isConsecutive(filtered,m);
}

const happySeqCount = (n,m)=>{
    let count = 0;
    if(m===1){
        // 1개의 연속된 수열을 따지는 경우 모든 열과 행이 행복한 수열이다.
        return 2*n;
    } else {
        for(let i=0;i<n;i++){
            // 행과 열이 각각 행복한 행복한 수열이라면 추가
            const row = isHappySeq(grid[i],m);
            const col = isHappySeq(grid.map(v=>v[i]),m);
            count = row ? count+1:count; 
            count = col ? count+1:count;
        }
    }
    return count;
}

console.log(happySeqCount(...nm.split(' ').map(Number)));
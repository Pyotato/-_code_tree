const fs = require('fs');

const [nm,...numbers] = fs.readFileSync(0).toString().trim().split('\n');
const grid = numbers.map(v=>v.split(' ').map(Number));
const [n,m] = nm.split(' ').map(Number);

const isHappySeq = (arr,m)=>{
    const copy = [...arr];
    let curr = copy.shift();
    let count = 1;
    while(copy.length>0){
        let next = copy.shift();
        if(curr===next){
            count++;
        } else {
            count = 1;
        }
        if(count>=m){
            return true;
        }
        curr = next;
    }

    return count>=m;
}

const happySeqCount = (n,m)=>{
    let count = 0;
    if(m===1){
        // 1개의 연속된 수열을 따지는 경우 모든 열과 행이 행복한 수열이다.
        return 2*n;
    } else {
        for(let i=0;i<n;i++){
            // 행과 열이 각각 행복한 행복한 수열이라면 추가
            const row = grid[i];
            const col =  grid.map(v => v[i]);
            if(isHappySeq(row,m)){
                count++;
            }
            if(isHappySeq(col,m)){
                count++;
            }
        }
    }
    return count;
}

console.log(happySeqCount(n,m));
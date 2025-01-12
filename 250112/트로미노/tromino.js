const fs = require('fs');

const [nm,...nums] = fs.readFileSync(0).toString().trim().split('\n');

const [n,m] = nm.split(' ').map(Number);
const grid = nums.map(v=>v.split(' ').map(Number));

// 영역 종류 : ㄴ 또는 - 자
// ㄴ (정방향) : x,x  x,x+1  x+1,x
// (시게방향으로 90도 회전) : x,x  x,x+1  x+1,x
// (180도 회전) : x,x  x-1,x  x,x+1 
// (270도 회전) : x,x x-1,x x,x+1

// - 자
// _ : x,x   x,x+1  x,x-1
// | : x,x   x-1,x  x+1,x

let maxSum = -Infinity;

const checkAreaSum = (x,y)=>{
    
    const moves = [
    // L 모양
    [[0,0],[0,1],[0,1]],
    [[0,0],[0,1],[1,0]],
    [[0,-1],[0,0],[0,1]],
    [[0,0],[-1,0],[0,1]],
    // - 모양
    [[0,0],[0,1],[0,-1]],
    [[0,0],[-1,0],[1,0]],
    ];
    const maxSums = [];
    for(let move of moves){
        if(move.every(([i,j])=> x+i<n && x+i>=0 && y+j>=0 && y+j<m)){
            const sum = Math.max(move.reduce((acc,curr)=>{
                let [i,j] = curr;
                acc+=grid[i+x][j+y];
                return acc;
            },0));
            maxSums.push(sum);
        }
    }
    return maxSums;

}

for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
        maxSum = Math.max(...checkAreaSum(i,j),maxSum);
    }
}

console.log(maxSum);
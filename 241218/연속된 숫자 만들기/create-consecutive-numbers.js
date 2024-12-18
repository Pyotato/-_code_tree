const fs = require('fs');
const [a, b, c]  = fs.readFileSync(0).toString().trim().split(' ').map(Number);

// 최소 이동 횟수 계산
let minMoves;
if(b===a+1 && c===b+1){
    minMoves = 0;
}
else if (b - a === 2 || c - b === 2) {
    minMoves = 1; // 한 번의 이동으로 해결
} else {
    minMoves = 2; // 두 번의 이동 필요
}

// 최대 이동 횟수 계산
const maxMoves = Math.max(b - a - 1, c - b - 1);

console.log(minMoves);
console.log(maxMoves);

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
const cases = [[...input, 0]]; // [a, b, c, count]
const visited = new Set(); // 방문 여부
let minMoves = Infinity;
let maxMoves = -Infinity;

const isConsecutive = (a, b, c) => a + 1 === b && b + 1 === c;

while (cases.length > 0) {
    const [a, b, c, count] = cases.shift();

    const key = `${a},${b},${c},${count}`;
    if (visited.has(key)){
        continue;
    }
    visited.add(key);

    if (isConsecutive(a, b, c)) {
        minMoves = Math.min(minMoves, count);
        maxMoves = Math.max(maxMoves, count);
        continue;
    }

    // a 이동
    if (c - b >= 2) {
        for (let i = b + 1; i < c; i++) {
            cases.push([b, i, c, count + 1]);
        }
    }

    // c 이동
    if (b - a >= 2) {
        for (let i = b - 1; i > a; i--) {
            cases.push([a, i, b, count + 1]);
        }
    }
}

// console.log(visited);

console.log(minMoves);
console.log(maxMoves);

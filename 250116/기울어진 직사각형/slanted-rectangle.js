const fs = require('fs');

const [N, ...nums] = fs.readFileSync(0).toString().trim().split('\n');

const n = +N;
const grid = nums.map(v => v.split(' ').map(Number));

const isInRange = (x, y) => x >= 0 && x < n && y >= 0 && y < n;

const rectangleCheck = (x, y) => {
  let j = y + 1;
  const moves = [];
  let points = null;

  for (let i = x - 1; i >= 0; i--) {
    if (isInRange(i, j)) {
      moves.push([i, j]);
    }
    j++;
  }

  if (moves.length === 0) {
    return null;
  }

  while (moves.length > 0) {
    const [nx, ny] = moves.shift();
    let nj = ny - 1;
    let countMoves = 1;
    for (let ni = nx - 1; ni >= 0; ni--) {
      if (
        isInRange(ni, nj) &&
        isInRange(x - countMoves, y - countMoves)
      ) {
        points = [[x, y], [nx, ny], [ni, nj], [x - countMoves, y - countMoves]];
        return points;
      }
      countMoves++;
      nj--;
    }
  }

  return null;
};

const sumArea = (bottomRight, topRight, topLeft, bottomLeft) => {
  const [x1, y1] = bottomRight;
  const [x2, y2] = topRight;
  const [x3, y3] = topLeft;
  const [x4, y4] = bottomLeft;

  let sum = 0;
  let j = y1;

  // Bottom-right to Top-right
  for (let i = x1; i > x2; i--) {
    if (isInRange(i, j)) sum += grid[i][j];
    j++;
  }

  // Top-right to Top-left
  j = y2;
  for (let i = x2; i > x3; i--) {
    if (isInRange(i, j)) sum += grid[i][j];
    j--;
  }

  // Top-left to Bottom-left
  j = y3;
  for (let i = x3; i < x4; i++) {
    if (isInRange(i, j)) sum += grid[i][j];
    j--;
  }

  // Bottom-left to Bottom-right
  j = y4;
  for (let i = x4; i < x1; i++) {
    if (isInRange(i, j)) sum += grid[i][j];
    j++;
  }

  return sum;
};


const arr = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const areas = rectangleCheck(i, j);
    if (areas != null) {
      arr.push(areas);
    }
  }
}

let maxSum = -Infinity;

for (let points of arr) {
  const sum = sumArea(...points);
  maxSum = Math.max(maxSum, sum);
}

console.log(maxSum);

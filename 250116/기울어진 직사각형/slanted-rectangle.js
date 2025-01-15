const fs = require('fs');

// Read input
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
const board = input.slice(1).map(line => line.split(' ').map(Number));

// Directions for the diagonals (dxs and dys)
const dxs = [-1, -1, 1, 1];
const dys = [1, -1, -1, 1];

// Function to check if coordinates are within the board range
const inRange = (nx, ny) => nx >= 0 && nx < n && ny >= 0 && ny < n;

// Function to calculate the score of a parallelogram boundary
const getScore = (x, y, w, h) => {
  const moveSizes = [w, h, w, h];
  let total = 0;

  for (let d = 0; d < 4; d++) {
    const dx = dxs[d];
    const dy = dys[d];
    const length = moveSizes[d];

    for (let step = 0; step < length; step++) {
      x += dx;
      y += dy;

      // If out of bounds, return 0 as this parallelogram is invalid
      if (!inRange(x, y)) {
        return 0;
      }

      // Add the value to the total
      total += board[x][y];
    }
  }

  return total;
};

// Main logic to find the maximum score
let ans = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let w = 1; w < n; w++) {
      for (let h = 1; h < n; h++) {
        // Calculate the score for a parallelogram starting at (i, j) with width `w` and height `h`
        ans = Math.max(ans, getScore(i, j, w, h));
      }
    }
  }
}

// Print the result
console.log(ans);

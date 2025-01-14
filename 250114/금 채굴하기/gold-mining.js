const fs = require('fs');

const [nm,...nums]= fs.readFileSync(0).toString().trim().split('\n');
const [n,m] = nm.split(' ').map(Number);
const matrix = nums.map(v=>v.split(' ').map(Number));

const checkRange = (x, y) => x >= 0 && y >= 0 && x < n && y < n;

const getGold = (arr) => {
  let cntGold = 0;
  arr.forEach(([x, y]) => {
    if (matrix[x][y] === 1){
        cntGold++;
    }
  });
  return cntGold;
};

const bfs = (queue, visited, currK) => {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const bfsList = [...queue.map(([x, y]) => [x, y])]; 

  while (queue.length > 0) {
    const [x, y, k] = queue.shift();

    for (let d = 0; d < 4; d++) {
      const nx = x + dx[d];
      const ny = y + dy[d];
      if (checkRange(nx, ny) && !visited[nx][ny] && k + 1 <= currK) {
        queue.push([nx, ny, k + 1]);
        visited[nx][ny] = true;
        bfsList.push([nx, ny]);
      }
    }
  }
  return bfsList;
};

let answer = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let kk = 0; kk <= n; kk++) {
      const currK = kk;
      const visited = Array.from({ length: n }, () => Array(n).fill(false));
      const center = [i, j, 0];
      visited[i][j] = true;

      const queue = [center];
      const bfsList = bfs(queue, visited, currK);

      const cost = currK * currK + (currK + 1) * (currK + 1);
      const earn = getGold(bfsList);

      if (cost <= earn * m) {
        answer = Math.max(answer, earn);
      }
    }
  }
}

  console.log(answer);

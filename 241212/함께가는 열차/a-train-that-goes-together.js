const fs = require('fs');
const [n, ...locationSpeed] = fs.readFileSync(0).toString().trim().split('\n');

const trains = locationSpeed.map((v)=>v.split(' ').map(Number));

let count = 1; 
let speed = trains[n - 1][1]; // 마지막 열차 속도

// 뒤에서 두번째 열차에서부터 첫 열차까지 
for (let i = n - 2; i >= 0; i--) {
  if (trains[i][1] > speed) {
    trains[i][1] = speed; // 앞 열차 속도로 맞추기 
  } else {
    count++;
    speed = trains[i][1]; // 현재 열차 속도 맞추기
  }
}

console.log(count);
const fs = require('fs');

const n = fs.readFileSync(0).toString().trim();

function calculateCycleLength(n) {
  let original = n; // 시작 숫자 저장
  let count = 0;

  do {
    // 각 자리의 합 계산
    let sum = Math.floor(n / 10) + (n % 10);

    // 새로운 숫자 생성
    n = (n % 10) * 10 + (sum % 10);

    count++; // 사이클 길이 증가
  } while (n !== original);

  return count;
}

console.log(calculateCycleLength(+n));

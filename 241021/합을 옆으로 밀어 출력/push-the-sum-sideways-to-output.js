const fs = require('fs');
const [_, ...nums] = fs.readFileSync(0).toString().trim().split('\n');

// 숫자들의 합을 문자로 변환
const sumStr = nums.reduce((acc,curr)=>acc+=(+curr),0).toString();

// 배열로 spread해주기
const str = [...sumStr];

// 첫째자리 숫자만 배열에서 가져오기
const firstStr = str.splice(0,1);

// 맨뒤로 옮겨서 하나의 string으로 이어주기
console.log([...str,firstStr].join(''));
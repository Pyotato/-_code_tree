const fs = require('fs');
const [n,numbers] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const nums= numbers.split(' ').map(v=>+v);

let count = 0;  // 2 등장 횟수 카운트
let index = 0;  // 자릿수 카운트

while(nums.length>=0){
    const current = nums.splice(0,1)[0];
    if(count===3){
        console.log(index);
        break;
    }
    if(current===2){
        count++;
    } 
    index++;
}
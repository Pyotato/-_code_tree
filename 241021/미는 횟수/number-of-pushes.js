// const fs = require('fs');
// let [A, B] = fs.readFileSync(0).toString().trim().split('\n');

// const printN = ()=>{
//     let n = 0;
//     while(n<B.length){
//         if(A===B){
//             console.log(n);
//             return;
//         }
//         const tempA = [...A];
//         const lastStr = tempA.pop();
//         A = [lastStr,...tempA].join('');
//         n++;
//     }
//     console.log(-1);
// }



// printN();


const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const B = lines[1]; 
const strings = [];
let A = lines[0];
let cnt = 1;

// 해당 코드는 A 요소들을 다 하나씩 밀어봤을 때까지만 실행합니다.
while (cnt < A.length) {
  A = A.split(''); // 각 요소들을 배열로 split합니다. 입력으로 받았던 let A의 데이터 타입이 string[]으로 변경되었습니다. 
  A.push(A.shift()); // A 배열의 첫 요소를 제거하고 A의 맨끝에 추가하셨습니다.
  A = A.join(''); // string으로 다시 A 배열의 데이터 타입을 변경하셨습니다.
  strings.push(A); // strings배열에 해당 변경된 string A를 추가하셨습니다.
  cnt++; // 그리고 다음 요소를 밀어주기 위해 카운트를 늘렸습니다.
}

// 새로 만들었던 string들을 추가해줬던 배열 strings 중 B가 있는지 확인합니다.
// 없다면 -1, 있다면 인덱스+1를 추가하셨습니다.
// console.log(strings.indexOf(B) === -1 ? -1 : strings.indexOf(B) + 1);
console.log(strings.indexOf(B)<0?-1:strings.indexOf(B));
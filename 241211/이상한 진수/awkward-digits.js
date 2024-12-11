const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split('\n');

function getCombinations(arr, k=2){
  const set = new Set();
  arr.forEach((_,i)=>{
    for(let j=0;j<k;j++){
      let copy = [...arr];
      copy.splice(i,1,j);
      set.add(parseInt(copy.join(''),k));
    }
  });
  return set;
}

const combA = getCombinations(a.split(''),2);
const combB = getCombinations(b.split(''),3);

console.log(...[...combA].filter(v=>combB.has(v)));

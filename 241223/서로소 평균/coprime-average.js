const fs = require('fs');
const [_,...aX] = fs.readFileSync(0).toString().trim().split('\n');
let [a,...x] = aX;
a = a.split(' ').map(Number);
x = +x[0];
const getGCMSet = (n)=>{
    const gcmSet = new Set([1,n]);
    for(let i=2;i<=n/2;i++){
        if(n%i===0){
            gcmSet.add(i);
        }
    }
    return gcmSet;
}
// 서로소 : 1빼고는 공통 약수가 없음
const isCoprime = (setA,setB)=>{
    const filtered = [...setA].filter((v)=>setB.has(v));
    return filtered.length===1;
} 

const setB = getGCMSet(x);
const coprimes = a.filter(v=>isCoprime(getGCMSet(v),setB));
const sum = coprimes.reduce((acc,curr)=>acc+=curr,0);

console.log((sum/coprimes.length).toFixed(2));
const fs = require('fs');
const [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

// 최소공배수 구하기
// 12 18 => 36
// 2*2*3  2*3*3
// 2*2*3*3

const getGCDs = (n) => {
    const gcms = {};
    let N = n;
    for(let i=2;i<=n;i++){
        while(N>1){
            if(N%i===0){
                N/=i;
                gcms[i]= gcms[i]==null? 1: gcms[i]+1;
            } else {
                break;
            }
            
        }
    }
    return gcms;
}

const nGCM = getGCDs(n);
const mGCM = getGCDs(m);

let lcm = 1;

const commonDivisors = new Set([...Object.keys(nGCM),...Object.keys(mGCM)])

for(let gcm of [...commonDivisors]){
    const nCount = nGCM[gcm];
    const mCount = mGCM[gcm];
    if(nCount!=null && mCount!=null){
        lcm*= gcm**Math.max(nCount,mCount);
    } else {
        lcm *= gcm**(nCount!=null ? nCount:mCount);
    }
}

console.log(lcm);
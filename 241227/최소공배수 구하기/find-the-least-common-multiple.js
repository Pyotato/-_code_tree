const fs = require('fs');
const [n,m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const getGCM = (n) => {
    const gcm = [];
    for(let i=2;i<n;i++){
        if(n%i===0){
            gcm.push(i);
        }
    }
    return gcm;
}

const nGCM = getGCM(n);
const mGCM = new Set(getGCM(m));

// 두 수에 서로 공통으로 존재하는 배수 중 가장 작은 수
const lcm = nGCM.filter(v=>mGCM.has(v)).reduce((acc,curr)=>acc*=curr,1);

console.log(lcm);
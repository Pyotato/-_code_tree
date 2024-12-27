const fs = require('fs');
const [n,m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

// 48 15
//  2,  3,  2*2,  2*3, 2*2*2, 2*2*3, 2*2*2*2, 2*2*2*3 
//  3,  5 
// 240 = 2*2*2*2*3*5

// 두 수에 서로 공통으로 존재하는 배수 중 가장 작은 수
const gcmCount = (n,gcmNum)=> {
    let count = 0;
    while(n/gcmNum>0){
        if(n%gcmNum===0){
             n/=gcmNum;
             count++;
        }else {
            break;
        }
    }
    return count;
}

const getGCM = (N) =>{
    const gcm = {};
    let copy = N;
    let i = 3;
    if(N%2===0){
        gcm['2'] = gcmCount(copy,2);
        copy /= ((gcmCount(copy,2))*2);
    }
    while(true){
        if(copy%i===0){
            gcm[i] = gcmCount(copy,i);
            copy /= ((gcmCount(copy,i))*i);
        }
        i++;
        if(copy<i){
            break;
        }
    }
    return gcm;
}

const nGcmObj = getGCM(n);
const mGcmObj = getGCM(m);

let lcm = 1;
const keys = [...new Set([...Object.keys(nGcmObj),...Object.keys(mGcmObj)])];

for(let key of keys){
    const nGcmK= nGcmObj[key];
    const mGcmK= mGcmObj[key];
    if(nGcmK!=null && mGcmK!=null){
        lcm*=key**Math.max(nGcmK,mGcmK);
    } else {
        lcm*=nGcmK!=null? (key**nGcmK):key**mGcmK;
    }
}

console.log(lcm);
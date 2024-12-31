const fs = require('fs');
const [n,m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

// 약수 구하기
const getDivisors = (n) => {
    let N = n;
    const divisors ={};
    
    for(let i=2;i<n/2;i++){
        let count = 0;
        if(N<i){
            return divisors;
        }
        while(N%i===0){
            N/=i;
            count++;
        }
        if(count>0){
            divisors[i]=count;
        }
    }

    return divisors;
}

const nDivisors = getDivisors(n);
const mDivisors = getDivisors(m);

// 최대 공약수 구하기
const getGCD = (nDivisors,mDivisors)=>{
    let answer = 1;
    const nDivisorsKey = Object.keys(nDivisors);
    const mDivisorsKey = Object.keys(mDivisors);

    if(nDivisorsKey.length===0 || mDivisorsKey.length===0){
        return answer;
    }
    
    const commonDivisors = [...new Set([...nDivisorsKey,...mDivisorsKey])]

    for(let key of commonDivisors){
        const nVal = nDivisors[key];
        const mVal = mDivisors[key];
        if(nVal!=null && mVal!=null){
            answer*= (+key)**Math.min(nVal,mVal);
        }
    }

    return answer;
}

console.log(getGCD(nDivisors,mDivisors));

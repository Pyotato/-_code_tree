const fs = require('fs');
const [start, end] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v);

let count = 0;

const largestCommonDivisorCountIs3 = (n)=>{
    let commonDivisor = 1;
    let LargestCommonDivisorCount = 0;
    while(commonDivisor<=n/2){
        if(n%commonDivisor===0){
            LargestCommonDivisorCount++;
        }
        if(LargestCommonDivisorCount>3){
            return false;
        }
        commonDivisor++;
    }
    return LargestCommonDivisorCount===3? true:false;
}

for(let i=start;i<end;i++){
    count += largestCommonDivisorCountIs3(i)? 1 :0;
}

console.log(count);
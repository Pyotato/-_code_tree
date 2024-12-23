const fs = require('fs');
const [n,k] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const MIN_PRIME = 2;

// 15 12
// 2 3 4 5 6 7 8 9 10 11 12 13 14 15
// p = 2,  3 5 7 9 11 13 15
// p = 3,  5 7 11 13
// p = 5, 7 11 13
// p = 7, 11 13
// p = 11, 13
// p = 13

const deleteKthPrime = (n,k)=>{
    let nums = Array.from({length:n-MIN_PRIME+1},(_,i)=>MIN_PRIME+i);
    let p;
    do{
        p = nums.shift();
        k--;
        const filtered = nums.filter(v=>{
            if(v%p===0){
                k--;
                if(k===0){
                    p=v;
                }
            }
            return v%p!==0;
        });
        nums = filtered;
        if(k<=0){
            return p;
        }
    }while(nums.length>0 || k>0)

    return p;

}

console.log(deleteKthPrime(n,k));
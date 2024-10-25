const fs = require('fs');
const [start, end] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v);

let count = 0;

const isCompleteNumber = (n)=>{
    let num = 1;
    const nums = new Set([1]);
    while(num<=n/2){
        if(n%num === 0){
            nums.add(n/num);
            nums.add(n);
        }
        num++;
    }
    nums.delete(n);
    const sum = [...nums].reduce((acc,curr)=>acc+=curr,0); 
    if(sum===n){
        return 1;
    }
    return 0;
}

for(let i=start; i<=end; i++){
    count += isCompleteNumber(i);
}

console.log(count);
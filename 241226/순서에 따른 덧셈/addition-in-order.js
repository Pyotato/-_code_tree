const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = +(input).splice(0,1)[0];
const nums = input[0].split(' ').map(Number);
const numObj = nums.reduce((acc,curr,i)=>{
    acc[i] = curr;
    return acc;
},{});

const calc = (n,place)=>{
    return n-(place-1);
}

const sum = (nums) =>{
    return nums.reduce((acc,curr,i)=>{
        const currSum = calc(numObj[curr],i+1);
        return currSum>=0? acc+currSum:acc;
    },0);
}

let max = -Infinity;

const combinations = () => {
    const numSet = new Set(); 
    const temp = [...Object.keys(numObj).map(v=>[v])];

    while(temp.length>0){
        const curr = temp.shift();

        // 만약에 모두 이어붙였다면 추가해주기
        if(curr.length===n){
            numSet.add(curr.join(','));
            continue;
        } 
     
         if(curr.length===1){
            for(let key in numObj){
                const currSum = sum(curr.map(v=>numObj[v]));
                max = Math.max(currSum,max);
                if(key!==curr[0] && currSum>=max){
                    temp.push([...curr,key]);
                }
            }
        } else {
            const currSet = new Set(curr);
            const filtered = Object.keys(numObj).filter(v => !currSet.has(v));
            const currSum = sum(curr.map(v=>numObj[v]));
            max = Math.max(currSum,max);
            for(let key of filtered){
                if(currSum>=max){
                    temp.push([...curr,key]);
                }
            }
        }
    }
    
    return [...numSet];
}



console.log(Math.max(combinations().map(v => sum(v.split(',').map(Number)))));
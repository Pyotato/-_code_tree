const fs = require('fs');
const [_,nums]= fs.readFileSync(0).toString().trim().split('\n');

const sorted = nums.split(' ').map(Number);

const getGCM = (nums)=>{
    const minNum = Math.min(...nums);
    const isGCM = (n)=> nums.every(v=>v%n===0);
    const gcms = [];
    for(let i=1;i<=minNum;i++){
        if(isGCM(i)){
            gcms.push(i);
        }
    }
    return gcms;
}
console.log(getGCM(sorted).join('\n'));
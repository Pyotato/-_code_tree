const fs = require('fs');
const [_,...nums] = fs.readFileSync(0).toString().trim().split('\n');

const numCount = nums.reduce((acc,curr)=>{
    if(acc[curr]==null){
        acc[curr] = 1;
    }else {
        acc[curr]++;
    }
    return acc;
},{});

const maxSequence = (K)=>{
    const filtered = nums.filter((v) => v != K);
    if(filtered.length===0){
        return 0;
    }
    let num = filtered.splice(0,1)[0];
    const seq = {};
    while(filtered.length>0){
        const curr = filtered.splice(0,1)[0];
        if(curr==num){
            if(seq[curr]==null){
                seq[curr]=[2];
            } else {
                seq[curr][seq[curr].length-1]++;
            }
        } else {
           num = curr;
           if(seq[curr]==null){
                seq[curr]=[1];
            } else {
                seq[curr].push(1);
            }
        }
    }
    return Math.max(...Object.values(seq).map(v=>Math.max(...v)));
};

console.log(Math.max(...Object.keys(numCount).map(v => maxSequence(v))));
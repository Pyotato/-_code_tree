const fs = require('fs');
const [N,...others] = fs.readFileSync(0).toString().trim().split('\n');

const A = others.splice(0,N).map(v=>+v);
const [M,...B] = others.map(v=>+v);

const sequences = (arr,length)=>{
    const set = new Set();
    for(let i=0;i<arr.length-length+1;i++){
        const seq = arr.slice(i,i+length);
        set.add(seq);
    }
    return set;
}

const swapSet = (arr) =>{
    const set = new Set();
    
    for(let i=0;i<arr.length;i++){
        const copy = [...arr];
        const spliced = copy.splice(i,1);
        for(let j=0;j<=copy.length;j++){
            const copy2 = [...copy];
            copy2.splice(j,0,...spliced);
            set.add(copy2.join('/'));
        }
    }    
    return set;
}

const convertZeroStart = (numSlash)=>{
    const nums = numSlash.split('/').map(v=>+v)
    const minNum = Math.min(...nums);
    const zeroStart = nums.map(v => v - minNum);
    return zeroStart;
}

const isBeautifulSequence = (A,B)=>{
    const setA = new Set(A);
    return setA.has(B);
}

const seqA = [...sequences(A,M)].map(A => swapSet(A));
const zeroSeqB = convertZeroStart(B.join('/')).join('');
const beautifulSequences = [];

[...seqA].forEach((v,i)=>{
    const zeroSeqAs = [...v].map(items=>convertZeroStart(items).join(''));
    if(isBeautifulSequence(zeroSeqAs,zeroSeqB)){
        beautifulSequences.push(i+1);
    }
})

console.log([beautifulSequences.length,...beautifulSequences].join('\n'));
const fs = require('fs');
const [N, ...words] = fs.readFileSync(0).toString().trim().split('\n');
const aCode = 'a'.charCodeAt(0);
const zCode = 'z'.charCodeAt(0);
const alphabetArr = Array.from({length:zCode-aCode+1},(_,i)=>String.fromCharCode(aCode+i));
const wordArr = words.map(v=>v.split(' '));

const alphabetCount= alphabetArr.reduce((acc,curr)=>{
    acc[curr]= 0;
    return acc;
},{});


const alphaSet = str => {
    const strArr = str.split('');
    return strArr.reduce((acc,curr)=>{
        if(acc[curr]==null){
            acc[curr]=1;
        }else {
            acc[curr]++;
        }
        return acc;
    },{})
}

const alphabetSets = wordArr.map(v => {
    const [a,b] = v.map(item=>alphaSet(item));
    const total = {};
    for(let i of [...new Set([...Object.keys(a),...Object.keys(b)])]){
        if(total[i]==null){
            if(a[i]!=null && b[i]!=null){
                total[i]= Math.max(b[i],a[i]);
            } else {
                total[i]=b[i]==null?a[i]:b[i];
            }
        } else {
            if(a[i]!=null && b[i]!=null){
                total[i]+= Math.max(b[i],a[i]);
            } else {
               total[i]+=b[i]==null?a[i]:b[i]; 
            }
            
        }
    }
    return total;
});

alphabetSets.forEach(keyVal=>{
    const keys = Object.keys(keyVal);
    for(let key of keys){
        alphabetCount[key]+=keyVal[key];
    }
})

console.log(Object.values(alphabetCount).join('\n'))

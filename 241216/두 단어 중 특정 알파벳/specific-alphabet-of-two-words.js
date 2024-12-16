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


const generateCombinations = (N,wordArr) => {
    const result = [];
    const backtrack = (current) => {
        
        if (current.length === N) {
            result.push(current.map((v,i)=>wordArr[i][v]).join(''));
            return;
        }
        current.push(0);
        backtrack(current);
        current.pop(); 
        
        current.push(1);
        backtrack(current);
        current.pop(); 
    };

    backtrack([]); 
    return result;
};

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

const alphabetSetCount = generateCombinations(+N,wordArr).map(v=>alphaSet(v));

alphabetSetCount.forEach(obj => {
    const keys = Object.keys(obj);
    keys.forEach(key=>{
        alphabetCount[key] = Math.max(obj[key],alphabetCount[key]);
    })
})

console.log(Object.values(alphabetCount).join('\n'));
const fs = require('fs');
const str = fs.readFileSync(0).toString().trim().split('0');

const strArr = str[0].trim().split('\n');

const oddNthString = (strArr)=>{
    return strArr.reduce((acc,curr,i) => acc = (i+1)%2 === 1 ? acc+curr+'\n' : acc,'')
}

console.log(strArr.length+'\n'+oddNthString(strArr));
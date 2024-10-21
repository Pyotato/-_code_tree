const fs = require('fs');
const [...input] =fs.readFileSync(0).toString().trim().split('\n');

const twenties = input.filter(v=>(+v)<30);
const average = (strArr) => {
    const sum = strArr.reduce((acc,curr)=>acc+=(+curr),0);
    return sum/strArr.length;
}
console.log(average(twenties));
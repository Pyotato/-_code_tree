const fs = require('fs');
const [...input] =fs.readFileSync(0).toString().trim().split('\n');

const twenties = input.filter(v=>(+v)<30);
const average = (strArr) => {
    const sum = strArr.reduce((acc,curr)=>acc+=(+curr),0);
    const avg =  sum/strArr.length;
    return ((Math.floor(avg*100))/100).toFixed(2)
}

console.log(average(twenties));
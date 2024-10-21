const fs = require('fs');
const [...nums] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const twenties = [];

while(nums.length>0){
    const num = +(nums.splice(0,1));
    if(num<30 && num>=20){
        twenties.push(num);
    } else {
        break;
    }
}

const average = (strArr)=>{
    const sum = strArr.reduce((acc,curr)=>acc+=curr,0);
    return (Math.floor((sum/strArr.length)*100)/100).toFixed(2);
}

console.log(average(twenties));
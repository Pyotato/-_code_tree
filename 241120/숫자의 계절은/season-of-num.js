const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

const arr = Array.from({length:13},(_,i)=>{
    if((i+1)>=12 || (i+1)<=2){
        return 'Winter';
    }
    if((i+1)>=3 && (i+1)<=5){
        return 'Spring';
    }
    if((i+1)>=6 && (i+1)<=8){
        return 'Summer';
    }
    if((i+1)>=9 && (i+1)<=11){
        return 'Fall';
    }
    return null;
})

console.log(arr[n-1]);
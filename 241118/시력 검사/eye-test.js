const fs = require('fs');
const [left,right] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const eyeSightTest = (left,right)=> {
    if(left>=1.0 && right>=1.0){
        return 'High';
    }
    if(left>=0.5 && right>=0.5){
        return 'Middle';
    }
    return 'Low'
}

console.log(eyeSightTest(+left,+right));
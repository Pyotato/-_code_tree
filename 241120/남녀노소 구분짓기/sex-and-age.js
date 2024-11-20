const fs = require('fs');
const [sex,age] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>+v);

const SEX_AGE = {
    0:(age)=> age>=19?'MAN':'BOY',
    1:(age)=>age>=19?'WOMAN':'GIRL'
}

console.log(SEX_AGE[sex](age));
const fs = require('fs');
let [a,b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v=>+v);

const hasGreatestCommonDiviser = (min,max)=>{
    const NUM1 = 1_920;
    const NUM2 =  2_880;
    let a = min;
    while(a<NUM2){
        if(NUM1%a===0 && NUM2%a===0){
            return 1;
        } else {
            a++;
        }
    }
    return 0;
}

console.log(hasGreatestCommonDiviser(a,b));
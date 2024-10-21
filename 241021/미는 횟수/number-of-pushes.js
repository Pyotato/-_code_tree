const fs = require('fs');
let [A, B] = fs.readFileSync(0).toString().trim().split('\n');

const printN = ()=>{
    let n = 0;
    while(n<B.length){
        if(A===B){
            console.log(n);
            return;
        }
        const tempA = [...A];
        const lastStr = tempA.pop();
        A = [lastStr,...tempA].join('');
        n++;
    }
    console.log(-1);
}



printN();
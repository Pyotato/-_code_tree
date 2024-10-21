const fs = require('fs');
let [A, B] = fs.readFileSync(0).toString().trim().split('\n');

let n = 0;

while(n<B.length){
    if(A===B){
        break;
    }
    const tempA = [...A];
    const lastStr = tempA.pop();
    A = [lastStr,...tempA].join('');
    n++;
}

console.log(n);
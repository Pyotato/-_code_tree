const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

let i = 1;
let counter = 1;

const nums = Array.from({length:9},(_,i)=>i++);


while(i<=n){
    console.log(...Array.from({length:i-1},()=>' '),...Array.from({length:n+1-i},()=> {
        if(counter===9){
            counter=1;
            return 9;
        }    
        return nums[(counter++)%9];
    }));
    i++;
}
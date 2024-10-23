const fs = require('fs');
const [_,...abs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


while(abs.length>0){
   let sum = 0;
   const [a,b] = abs.splice(0,1)[0].split(' ').map(v=>+v);
   for(let i=a;i<=b;i++){
     if(i%2===0){
        sum+=i;
     }
   }
   console.log(sum);
}
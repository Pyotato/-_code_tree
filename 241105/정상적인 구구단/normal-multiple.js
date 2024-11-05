const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

for(let i=1;i<=n;i++){
    console.log(Array.from({length:n},(_,j)=>`${i} * ${j+1} = ${i*(j+1)}`).join(', '));
}
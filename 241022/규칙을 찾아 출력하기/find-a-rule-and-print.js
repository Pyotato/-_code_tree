const fs = require('fs');
const n = +(fs.readFileSync('/dev/stdin').toString().trim());

const printStars = (n)=>{
    let count = n;
    if(n===1){
        console.log(''.padStart(2*count,'* '));
        return;
    }
    console.log(''.padStart(2*n,'* '));
    while(count>2){
        let stars = [...''.padStart(2*n,' ')];
        stars[0] = '*';
        stars[stars.length-2] = '*';
        if(count<n){
            let evenNum = 2*(n-(count));
            while(evenNum>0){
                stars[evenNum] = '*';
                evenNum-=2;
            }
        }
        console.log(stars.join(''));
        count--;
    }
    console.log(''.padStart(2*n,'* '));
}

printStars(n);
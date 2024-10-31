const fs = require('fs');
const [nq,numbers,...queries] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


let [n,q] = nq.split(' ');
const nums = numbers.trim().split(' ');

while(queries.length>0){
    const [num,...others] = queries.splice(0,1)[0].split(' ');
    if(num == 1){
        console.log(nums[+(others[0])-1]);
    } 
    else if(num == 2){
        const index = nums.findIndex(v => +v === +others)+1;
        console.log(index<=0?0:index);
    } 
    else {
        const [s,e] = others;
        console.log(...nums.slice(+(s)-1,(+e)));
    }
}
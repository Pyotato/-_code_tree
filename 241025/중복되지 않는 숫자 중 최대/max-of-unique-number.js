const fs = require('fs');
const[N,nums] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numbers = nums.split(' ').reduce((acc,curr)=>{
    if(!acc[curr]){
        acc[curr] = 1;
    } else {
        acc[curr]++;
    }
    return acc;
},{});


const filtered = [];

Object.keys(numbers).forEach(v=>{
    if(numbers[v]===1){
        filtered.push(v);
    }
})

if(filtered.length>0){
   const maxNum =  Math.max(...filtered);
   console.log(maxNum);
} else{
    console.log(-1);
}
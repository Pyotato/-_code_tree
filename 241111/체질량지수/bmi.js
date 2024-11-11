const fs = require('fs');
const [h,w] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const bmi = w/(h/100)**2

console.log(Math.floor(bmi));
if(bmi>=25){
    console.log('Obesity');
}
const fs = require('fs');
const [n,numbers] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


const grade = (numbers.split(' ').reduce((acc,curr)=>acc+=(+curr),0))/(+n);

const convertGrade = (grade)=>{
    if(grade>=4.0){
        return 'Perfect';
    }
    if(grade>=3.0){
        return 'Good';
    }
    return 'Poor';
}

console.log(`${grade.toFixed(1)}\n${convertGrade(grade)}`);
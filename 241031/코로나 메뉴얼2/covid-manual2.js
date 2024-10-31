const fs = require('fs');
const cases = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const answers = [];

let isEmergency = '';

const clinics = ['A','B','C','D'];

const hasSymptom = (symptom) => symptom === 'Y'

while(cases.length>0){
     const [symptom,temperature]= cases.splice(0,1)[0].split(' ');

     if(hasSymptom(symptom)){
        +(temperature)>=37 ? answers.push('A') : answers.push('C');
     } else {
        +(temperature)>=37 ?answers.push('B') : answers.push('D');
     }
     
     if(answers.length%3===0){
        isEmergency = answers.filter(type=>type==='A').length >= 2? 'E':'';
     }
}

const clinicCount = answers.reduce((acc,curr)=>{
    if(acc?.[curr] == null){
        acc[curr] = 1;
    } else {
        acc[curr]++;
    }
    return acc;
},{});

console.log(...clinics.map(clinic=>clinicCount?.[clinic]==null?0:clinicCount[clinic]),isEmergency);
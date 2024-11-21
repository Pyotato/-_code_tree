const fs = require('fs');
const people = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const coronaStatus = (hasFlu,temperature)=>{
    if(hasFlu==='Y'){
        return temperature >= 37 ? 'A' : 'C';
    } else {
        return temperature >= 37 ? 'B' : 'D';
    }
}


let isEmergency = '';

people.reduce((acc,curr,index)=>{
    const [hasFlu, temperature] = curr.split(' ');
    const status = coronaStatus(hasFlu,+temperature);
    acc.push(status);
    let peopleCount = index+1;
    if(peopleCount%3===0){
        isEmergency = isEmergency!=='E' && acc.slice(peopleCount-3,peopleCount).filter((v)=>v==='A').length>=2?'E':'N';
    }
    return acc;
},[]);



console.log(isEmergency);
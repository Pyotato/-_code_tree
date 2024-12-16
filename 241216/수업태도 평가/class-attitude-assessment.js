const fs = require('fs');
const [_, ...studentNGrades] = fs.readFileSync(0).toString().trim().split('\n');
const STUDENTS  = {
    "Bessie":0, "Elsie":0, "Daisy":0, "Gertie":0, "Annabelle":0, "Maggie":0, "Henrietta":0
}

studentNGrades.forEach((stGr)=>{
    const [name,grade] = stGr.split(' ');
    STUDENTS[name]+=+grade;
});

const studentByScore = Object.keys(STUDENTS).reduce((acc,curr)=>{
    if(acc[STUDENTS[curr]]==null){
        acc[STUDENTS[curr]] = [curr];
    } else {
        acc[STUDENTS[curr]].push(curr);
    }
    return acc;
},{});


const [__,secondLowestStudents] = Object.values(studentByScore);

if(secondLowestStudents.length==1){
    console.log(secondLowestStudents[0]);
} else {
    console.log('Tie');
}

const fs = require('fs');
const [_, ...studentNGrades] = fs.readFileSync(0).toString().trim().split('\n');
const STUDENTS  = {
    "Bessie":0, "Elsie":0, "Daisy":0, "Gertie":0, "Annabelle":0, "Maggie":0, "Henrietta":0
}

studentNGrades.forEach((stGr)=>{
    const [name,grade] = stGr.split(' ');
    STUDENTS[name]+=+grade;
});

const studentGrades = Object.values(STUDENTS);
const studentNames = Object.keys(STUDENTS);
const lowestGrade = Math.min(...studentGrades);

const printSecondLowest = (STUDENTS)=>{
    const filteredLowest = studentNames.filter(key => STUDENTS[key]!=lowestGrade);
    const secondLowestStudents = filteredLowest.sort((a,b)=>filteredLowest[b]-filteredLowest[a]);
    const secondlowestGradeStudent = secondLowestStudents.pop();
    const secondlowestGrade = STUDENTS[secondlowestGradeStudent];
    const secondlowestGradeStudents = studentNames.filter(key => STUDENTS[key]==secondlowestGrade);
    if(secondlowestGradeStudents.length===1){
        return secondlowestGradeStudents[0];
    }
    if(filteredLowest.length===0 || secondlowestGradeStudents.length>1){
        return 'Tie';
    }
    return secondlowestGradeStudent;
}

console.log(printSecondLowest(STUDENTS));



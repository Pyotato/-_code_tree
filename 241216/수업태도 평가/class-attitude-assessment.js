const fs = require('fs');
const [_, ...studentGrades] = fs.readFileSync(0).toString().trim().split('\n');
const STUDENTS  = {
    "Bessie":0, "Elsie":0, "Daisy":0, "Gertie":0, "Annabelle":0, "Maggie":0, "Henrietta":0
}

studentGrades.forEach((stGr)=>{
    const [name,grade] = stGr.split(' ');
    STUDENTS[name]+=+grade;
});

const printSecondLowest = (STUDENTS)=>{
    const studentNames = Object.values(STUDENTS);
    if(studentNames.length===1){
        return studentNames[0];
    }
    const lowestGrade = Math.min(...studentNames);
    const filteredLowest = Object.keys(STUDENTS).filter(key => STUDENTS[key]!=lowestGrade);
    const secondLowestStudents = filteredLowest.sort((a,b)=>filteredLowest[b]-filteredLowest[a]);
    const secondlowestGradeStudent = secondLowestStudents.pop();
    const secondlowestGrade = STUDENTS[secondlowestGradeStudent];
    const secondlowestGradeStudents = Object.keys(STUDENTS).filter(key => STUDENTS[key]==secondlowestGrade);
    if(filteredLowest.length===0 || secondlowestGradeStudents.length>1){
        return 'Tie';
    }
    return secondlowestGradeStudent;
}

console.log(printSecondLowest(STUDENTS));



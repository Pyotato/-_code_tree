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
    const lowestGrade = Math.min(...Object.values(STUDENTS));
    const filteredLowest = Object.keys(STUDENTS).filter(key => STUDENTS[key]!=lowestGrade);
    if(filteredLowest.length===0){
        return 'Tie';
    }
    const secondLowestStudents = filteredLowest.sort((a,b)=>filteredLowest[a]-filteredLowest[b]);
    if(secondLowestStudents.length===1){
        return secondLowestStudents[0];
    } 

    return 'Tie';
    // const secondLowestStudentScore = STUDENTS[secondLowestStudents[0]];
    // const filteredSecondLowestStudents = Object.keys(STUDENTS).filter(key => STUDENTS[key]==secondLowestStudentScore);
    // return filteredSecondLowestStudents;

}

console.log(printSecondLowest(STUDENTS));



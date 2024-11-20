const fs = require('fs');
const [A,B] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>v.split(' ').map(score => +score));

const priority = (A,B) => {
    if(A[0]>B[0]){
        return 'A'
    }
    if(A[0]<B[0]){
        return 'B'
    }
    return A[1]<B[1]?'A':'B';
}

console.log(priority(A,B));
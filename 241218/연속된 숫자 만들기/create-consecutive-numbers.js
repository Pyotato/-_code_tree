const fs = require('fs'); 
const cases = [[...(fs.readFileSync(0).toString().trim().split(' ').map(Number)),0]];
let moves = [];

const isConsecutive = (a,b,c) => {
    return a+1 == b && b+1 ===c;
}

while(cases.length>0){
    const [a,b,c,count]= cases.pop();
    // console.log(a,b,c,'count: ',count);
    if(isConsecutive(a,b,c)){
        moves.push(count);
        break;
    }
    // a이동
    if(c-b>=2){
        if(isConsecutive(b,b+1,c)){
            moves.push(count+1);
        } else {
            for(let i = b+1;i<c;i++){
                cases.push([b,i,c,count+1]);
            }
        }
        
    }
    // c이동
    if(b-a>=2){
        if(isConsecutive(a,b-1,b)){
            moves.push(count+1);
        } else {
             for(let i = b-1;i>a;i--){
                cases.push([a,i,b,count+1]);
            }
        }
    }

}

console.log(Math.min(...moves));
console.log(Math.max(...moves));


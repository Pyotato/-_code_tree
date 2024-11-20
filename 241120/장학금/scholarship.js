const fs = require('fs');
const [mid,final] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v=>+v);

const scholarship = (mid,final)=>{
    if(mid<90){
        return 0;
    }
    if(final>=95){
        return 100_000;
    }
    if(final>=90){
        return 50_000;
    }
    return 0;
}

console.log(scholarship(mid,final));

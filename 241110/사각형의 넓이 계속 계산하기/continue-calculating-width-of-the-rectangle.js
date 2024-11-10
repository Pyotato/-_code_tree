const fs = require('fs');
const rectangles =fs.readFileSync('/dev/stdin').toString().trim().split('\n');


while(rectangles.length>0){
    const [x,y,alpha] = rectangles.splice(0,1)[0].split(' ');
    console.log((+(x))*(+(y)));
    if(alpha==='C'){
        break;
    }
}
const fs = require('fs');
const [n, ...bombLocations] = fs.readFileSync(0).toString().trim().split('\n');

const sortedLocations = bombLocations.map(Number).sort((a,b)=>a-b);

const maxBombed = [];

for(let i=0;i<sortedLocations.length;i++){
    const currentBomb = sortedLocations[i];
    let radius = 1;
    let copy = [...sortedLocations];
    while(radius<sortedLocations.length-1){
        const start = i-radius>=0?i-radius:0;
        const end = i+radius<sortedLocations.length?i+radius+1:sortedLocations.length+1;
        const bombed = copy.slice(start,end).filter(bomb=>{
            if(i<sortedLocations.length/2){
                return currentBomb+radius>=bomb;
            } else {
                return currentBomb-radius>=bomb;
            }
            
        });
        maxBombed.push(bombed.length);
        radius++;
    }
}

console.log(Math.max(...maxBombed));
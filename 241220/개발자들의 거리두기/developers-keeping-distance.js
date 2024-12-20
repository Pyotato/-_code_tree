const fs = require('fs');
const [N,...people]  = fs.readFileSync(0).toString().trim().split('\n');

const sorted = people.map(v=>v.split(' ').map(Number));
sorted.sort((a,b)=>b[0]-a[0]);

let maxPossible = Infinity;

for(let i=0;i<N;i++){
    const curr = sorted[i];
    const right = sorted[i+1];
    if(i>0){
        const left = sorted[i-1];
        if(left!=null && curr != null && right !=null){
            const [lDist,lInfected] = left;
            const [currDist,currInfected] = curr;
            const [rDist,rInfected] = right;
            if(currInfected!=lInfected && currInfected!=rInfected){
                maxPossible = Math.min(maxPossible,Math.abs(lDist-currDist),Math.abs(rDist-currDist));
            }
        }
    } else {
        const [currDist,currInfected] = curr;
        const [rDist,rInfected] = right;
        if(currInfected==1 && rInfected==1){
            maxPossible = Math.min(maxPossible,Math.abs(rDist-currDist));
        }
        
    }
}

const filtered = sorted.filter(([_,infected])=>infected===1).map(v=>v[0]);

const initialInfected = new Set();

while(maxPossible>0){
    const copy = [...filtered];
    for(let i = 0;i<copy.length-1;i++){
        const curr = copy[i];
        const next =copy[i+1];
        if(Math.abs(curr-next)>maxPossible){
            filtered.shift();
            continue;
        } else {
            initialInfected.add(`${curr} ${next}`);
        }
    }
    maxPossible--;
}

console.log(initialInfected.size);

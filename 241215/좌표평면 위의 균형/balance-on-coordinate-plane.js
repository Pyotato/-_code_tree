const fs = require('fs');
const [NR, ...xys] = fs.readFileSync(0).toString().trim().split('\n');

const [_,R] = NR.split(' ').map(Number);

const points =xys.map(v=>v.split(' ').map(Number));

// 각 방면의 좌표 개수 차이
const pointCountDif = (points)=>{
    const max = Math.max(...points);
    return points.reduce((acc,curr)=>{
        acc+=Math.abs(curr-max);
        return acc;
    },0);
}

// 1,2,3,4 방면 중 위치 리턴
const getLocation = (x,y,a,b)=>{
    if(x>a){
        return y<b?0:1;
    }else{
        return y<b?2:3;
    }
}

let min = Infinity;
let answer = -Infinity;

for(let i=2;i<=R;i+=2){
    for(let j=2;j<=R;j+=2){
        const copy = [...points];
        let distribution =[0,0,0,0];
        while(copy.length>0){
            const point = copy.pop();
            distribution[getLocation(...point,i,j)]++;
        }
        const diff = pointCountDif(distribution);
        if(min>diff){
            min =diff
            answer = Math.max(...distribution);
        }
    }
}

console.log(answer); 
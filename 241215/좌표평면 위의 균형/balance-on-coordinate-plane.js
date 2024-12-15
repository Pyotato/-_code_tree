const fs = require('fs');
const [NR, ...xys] = fs.readFileSync(0).toString().trim().split('\n');

const [N,R] = NR.split(' ').map(Number);
const points = xys.map(v => v.split(' ').map(Number));

const getLocation = (x, y, centerX, centerY) => {
    if (x > centerX) {
        return y < centerY ? 0 : 1;
    } else {
        return y < centerY ? 2 : 3;
    }
};
let meanX = 0;
let meanY = 0;
let [minX,maxX,minY,maxY] = points.reduce((acc,curr)=>{
    acc[0] = Math.min(curr[0],acc[0]);
    acc[1] = Math.max(curr[0],acc[1]);
    acc[2] = Math.min(curr[1],acc[2]);
    acc[3] = Math.max(curr[1],acc[3]);
    meanX+=curr[0];
    meanY+=curr[1];
    return acc;
},[Infinity,-Infinity,Infinity,-Infinity]);

meanX= Math.round(meanX/N);
meanY= Math.round(meanY/N);

meanX= meanX%2===1 ?meanX+1:meanX;
meanY= meanY%2===1 ?meanY+1:meanY;



minX= minX%2===1 ?minX-1:minX;
minY= minY%2===1 ?minY-1:minY;
maxX= maxX%2===1 ?maxX+1:maxX;
maxY= maxY%2===1 ?maxY+1:maxY;

// console.log(minX,maxX,minY,maxY,meanX,meanY);

let min = Infinity;
let answer = -Infinity;

const sumDistribution = (arr,max)=>{
    return arr.reduce((acc, curr) => acc += Math.abs(curr - max), 0);
}

for(let i=meanX;i<=maxX;i+=2){
    for(let j=meanY;j<=maxY;j+=2){
        let distribution = [0, 0, 0, 0];
        for (const [x, y] of points) {
            const loc = getLocation(x, y, i, j);
            distribution[loc]++;
        }
        const max = Math.max(...distribution);
        const diff = sumDistribution(distribution,max);
        if (diff < min) {
            min = diff;
            answer = max;
        }
    }
    // for(let j=meanY;j>=minY;j-=2){
    //     let distribution = [0, 0, 0, 0];
    //     for (const [x, y] of points) {
    //         const loc = getLocation(x, y, i, j);
    //         distribution[loc]++;
    //     }
    //     const max = Math.max(...distribution);
    //     const diff = sumDistribution(distribution,max);
    //     if (diff < min) {
    //         min = diff;
    //         answer = max;
    //     }
    // }
}

// for(let i=meanX;i>=minX;i-=2){
//     for(let j=meanY;j<=maxY;j+=2){
//         let distribution = [0, 0, 0, 0];
//         for (const [x, y] of points) {
//             const loc = getLocation(x, y, i, j);
//             distribution[loc]++;
//         }
//         const max = Math.max(...distribution);
//         const diff = sumDistribution(distribution,max);
//         if (diff < min) {
//             min = diff;
//             answer = max;
//         }
//     }
//     for(let j=meanY;j>=minY;j-=2){
//         let distribution = [0, 0, 0, 0];
//         for (const [x, y] of points) {
//             const loc = getLocation(x, y, i, j);
//             distribution[loc]++;
//         }
//         const max = Math.max(...distribution);
//         const diff = sumDistribution(distribution,max);
//         if (diff < min) {
//             min = diff;
//             answer = max;
//         }
//     }
// }


console.log(answer);

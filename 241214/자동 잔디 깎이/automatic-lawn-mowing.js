// const fs = require('fs');
// const [N, ...moves] = fs.readFileSync(0).toString().trim().split('\n');

// const directions = {
//     "W":(d)=>[0,-d],
//     "S":(d)=>[-d,0],
//     "N":(d)=>[d,0],
//     "E":(d)=>[0,d]
// }

// let grid = [[0,0,false]];

// const revisited = (nx,ny)=>{
//     const newGrid = [];
//     let hasVisited = false;
//     for(const [x,y,visited] of grid){
//         if(nx===x && ny===y){
//             newGrid.push([x,y,true]);
//             hasVisited = true;
//         } else{
//             newGrid.push([x,y,visited]);
//         }
//     }
//     grid = newGrid;
//     return hasVisited;
// }

// moves.forEach((v)=>{
//     const [direction, distance] = v.split(' ');
//     const [x,y]= grid.pop();
//     grid.push([x,y]);
//     for(let i=1;i<=+distance;i++){
//         const [moveX,moveY] = directions[direction](i);
//         const [nx,ny] = [x+moveX,y+moveY];
//         if(revisited(nx,ny)){
//             grid.push([nx,ny,true]);
//         } else {
//             grid.push([nx,ny])
//         }
//     }
// })

// console.log(grid.filter(([_,__,revisited])=>revisited==true));

const fs = require('fs');
const [N, ...moves] = fs.readFileSync(0).toString().trim().split('\n');

const directions = {
    "W":(d)=>[0,-d],
    "S":(d)=>[-d,0],
    "N":(d)=>[d,0],
    "E":(d)=>[0,d]
}

let grid = [[0,0,false,0]];

const revisitedTime = [];

const revisited = (nx,ny,v,nTime)=>{
    const newGrid = [];
    let hasVisited = false;
    for(const [x,y,visited,time] of grid){
        if(nx===x && ny===y){
            newGrid.push([x,y,true,nTime]);
            hasVisited = true;
            revisitedTime.push(Math.abs(nTime-time));
        } else{
            newGrid.push([x,y,visited,time]);
        }
    }
    grid = newGrid;
    return hasVisited;
}

moves.forEach((v)=>{
    const [direction, distance] = v.split(' ');
    const [x,y,visited,time]= grid.pop();
    grid.push([x,y,visited,time]);
    for(let i=1;i<=+distance;i++){
        const [moveX,moveY] = directions[direction](i);
        const [nx,ny] = [x+moveX,y+moveY];
        if(revisited(nx,ny,null,time+i)){
            grid.push([nx,ny,true.time+i]);
        } else {
            grid.push([nx,ny,false,time+i]);
        }
    }
});
console.log(revisitedTime.length===0?-1:Math.min(...revisitedTime.filter((v=>!Number.isNaN(v)))));
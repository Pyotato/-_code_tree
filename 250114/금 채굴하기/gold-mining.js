const fs = require('fs');

const [nm,...nums]= fs.readFileSync(0).toString().trim().split('\n');
const [n,m] = nm.split(' ').map(Number);
const mine = nums.map(v=>v.split(' ').map(Number));

const calcCost = (diamonds,k)=>{
    return diamonds*m - (k*k+(k+1)*(k+1));
}

const checkDiamondGrid = (x,y,k)=>{
    const arr = [];
    let indice = [];
    let count=0;

    const addDiamond =(i,j)=>{
        if(i>=0 && i<n && j>=0 && j<n){
            arr.push(mine[i][j]);
            indice.push([i,j]);
        }
    }

    for(let i=x;i<=x+k;i++){
        for(let j=y-k+count;j<y;j++){
            addDiamond(i,j);
        }
        for(let j=y;j<=y+k-count;j++){
            addDiamond(i,j);
        }
        count++;
    }
    count=0;
    for(let i=x-1;i>=x-k;i--){
        for(let j=y-k+count+1;j<y;j++){
            addDiamond(i,j);
        }
        for(let j=y;j<y+k-count;j++){
            addDiamond(i,j);
        }
        count++;
    }

    const diamonds = arr.reduce((acc,curr)=>acc+curr,0);
    const cost = calcCost(diamonds,k);
    return [diamonds,cost];
}

const calcProfit = (x,y)=>{
    const currGold = mine[x][y];
    const arr = Array.from({length:n},()=>[currGold,calcCost(currGold,1)]);
    for(let i=1;i<n+1;i++){
        arr[i-1] =checkDiamondGrid(x,y,i);
    }
    arr.sort((a,b)=>b[1]-a[1]);
    return arr[0][0];
}

const goldCount = Array.from({length:n},()=>Array.from({length:n},()=>[]));

for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        const profit = calcProfit(i,j);
        goldCount[i][j] = profit;
    }
}

// console.log(goldCount,max);
console.log(Math.max(...goldCount.flat()));
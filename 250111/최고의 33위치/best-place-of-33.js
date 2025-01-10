const fs = require('fs');
const [n,...grid] = fs.readFileSync(0).toString().trim().split('\n');
let maxCoins = -Infinity;
const MAX_N = 3;
const N = +n;
const coins = grid.map(v=>v.split(' ').map(Number));

const countCoin = (arr)=>{
    return arr.flat().reduce((acc,curr)=>{
        if(curr===1){
            acc+=1;
        }
        return acc;
    },0);
}

const countCoinInRange = (x,y) => {
    const coinsInRange = coins.slice(x,x+MAX_N).map(v=>v.slice(y,y+MAX_N));
    return countCoin(coinsInRange);
}



if(N === MAX_N){
    console.log(countCoin(coins));
} else {
    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            if(i+2<N && j+2<N){
                 maxCoins = Math.max(maxCoins,countCoinInRange(i,j))
            }
        }
    }
    console.log(maxCoins);
}


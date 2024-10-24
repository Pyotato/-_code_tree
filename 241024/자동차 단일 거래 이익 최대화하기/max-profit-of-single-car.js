const fs = require('fs');
const [_,prices] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const carPrices = prices.split(' ').map(v => +v);

const getBestDeal = ()=>{
    let profit = 0;
    while(carPrices.length>0){
        const currentPrice = carPrices.splice(0,1)[0];
        carPrices.forEach(sellPrice =>{
            profit = Math.max(sellPrice-currentPrice,profit);
        })
    }
    return profit;
}

console.log(getBestDeal());
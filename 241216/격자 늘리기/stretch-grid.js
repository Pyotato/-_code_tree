const fs = require('fs');
const [NMK, ...grid] = fs.readFileSync(0).toString().trim().split('\n');

const [_,__,K] = NMK.split(' ').map(Number);

const newGrid = grid.reduce((acc,curr)=>{
    const rows = Array.from({length:K},()=>{
        const row = curr.split('').map(v=>''.padStart(K,v));
        return row.join('');
    });
    acc.push(rows.join('\n'));
    return acc;
},[]);

console.log(newGrid.join('\n'))
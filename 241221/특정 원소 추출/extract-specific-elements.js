const fs = require('fs');
const [nm, items]  = fs.readFileSync(0).toString().trim().split('\n');

const [n,m] = nm.split(' ').map(Number);

// 10 3
// 2 9 5

// [1,2,3,4,5,6,7,8,9,10]
// 연산 1 => shift
// 연산 2 => splice(0,1)를 맨 뒤에 push
// 연산 3 => splice(0,0,pop한 값)

// 2 => 2,3,4,5,6,7,8,9,10,1

// 3 => 1,2,3,4,5,6,7,8,9,10
// 3 => 10,1,2,3,4,5,6,7,8,9
// 3 => 9,10,1,2,3,4,5,6,7,8

// 2 => 8,9,10,1,2,3,4,5,6,7
// 2 => 7,8,9,10,1,2,3,4,5,6
// 2 => 6,7,8,9,10,1,2,3,4,5
// 2 => 5,6,7,8,9,10,1,2,3,4

const arr = Array.from({length:n},(_,i)=>i+1);
const elems = items.split(' ').map(Number);

const calc = {
    '1':(arr)=>{
        return arr[0];
    },
    '2':(arr)=>{
        const copy = [...arr];
        const spliced = copy.splice(0,1)[0];
        copy.push(spliced);
        return copy;
    },
    '3':(arr)=>{
        const copy = [...arr];
        const popped = copy.pop();
        copy.splice(0,0,popped);
        return copy;
    }
}

let copy = [...arr];
let combinations = [copy,0];

const repeatCalc = (num,elem,currArr,count)=>{
    let temp = [...currArr];
    let tempCount = count;
    if(calc['1'](temp)==elem){
        return [[temp,tempCount]];
    }
    while(calc['1'](temp)!=elem){
        tempCount++;
        temp = calc[num](temp);
        if(calc['1'](temp)==elem){
            return [[temp,tempCount]];
        } 
    }
}

for(let elem of elems){
        let [currArr,count] = combinations;
        // 연산 2
        const comb2 = repeatCalc(2,elem,currArr,count);
        // 연산 3
        const comb3 = repeatCalc(3,elem,currArr,count);

        const minMove = [...comb2,...comb3].sort((a,b)=>a[1]-b[1]);

        combinations = minMove[0];
}

console.log(combinations[1]);




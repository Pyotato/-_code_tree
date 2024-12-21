const fs = require('fs');
const [nm, items]  = fs.readFileSync(0).toString().trim().split('\n');

const [n,__] = nm.split(' ').map(Number);

// 연산 1 => shift (맨 앞에 제거한 값 비교)
// 연산 2 => splice(0,1)를 맨 뒤에 push
// 연산 3 => splice(0,0,pop한 값)

const arr = Array.from({length:n},(_,i)=>i+1);
const elems = items.split(' ').map(Number);

const calc = {
    '1':(arr,elem)=>{
        const copy = [...arr];
        const firstElem = copy.shift();
        return firstElem === elem;
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
        return [popped,...copy];
    }
}

let combinations = [[...arr],0];

const repeatCalc = (num,elem,currArr,count)=>{
    let temp = [...currArr];
    let tempCount = count;
    if(calc['1'](temp,elem)){
        temp.shift();
        return [[temp,tempCount]];
    }
    while(!calc['1'](temp,elem)){
        tempCount++;
        temp = calc[num](temp);
        if(calc['1'](temp)==elem){
            temp.shift();
            return [[temp,tempCount]];
        } 
    }
    temp.shift();
    return [[temp,tempCount]];
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




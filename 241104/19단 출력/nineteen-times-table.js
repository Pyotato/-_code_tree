const n = 19;

const TimeTable19 = Array.from({length:n},(_, i)=> 
{
    const arr = Array.from({length:n},(_, j)=>{
        return `${i+1} * ${j+1} = ${(i+1)*(j+1)}`
    });
    let temp = [];
    const formatted = arr.reduce((acc,curr,index)=>{
        if(temp.length<2){
            temp.push(curr);
        }
        if(temp.length===2){
            acc.push(temp.join(' / '));
            temp = [];
        }
        if(index===arr.length-1){
            acc.push(curr);
        }
        return acc;
    },[]);
    return formatted.join('\n');
}
);

console.log(TimeTable19.join('\n'));
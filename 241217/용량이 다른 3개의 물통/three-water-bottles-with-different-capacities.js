const fs = require('fs'); 
let buckets = fs.readFileSync(0).toString().trim().split('\n').map(v=>{
    const [max, current] = v.split(' ').map(Number);
    return {max,current};
});
const MAX = 100;
let count = 0;

const moveWater = (_to,_from)=>{
    if(_to.current+_from.current>_to.max){
        _to.current = _to.max;
        _from.current = _from.current-_to.max>=0?_from.current-_to.max:0;
    } else {
        _to.current+=_from.current;
        _from.current = 0;
    }
    return [_to,_from];
}

while(true){
    if(count===MAX){
        console.log(buckets.map(v => v.current).join('\n'));
        break;
    }
    const [iFrom,iTo] = [count%buckets.length,(count+1)%buckets.length];
    const [newBucketTo,newBucketFrom]= moveWater(buckets[iTo],buckets[iFrom]);
    buckets.splice(iTo,1,newBucketTo);
    buckets.splice(iFrom,1,newBucketFrom);
    count++;
}


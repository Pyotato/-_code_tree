const fs = require('fs'); 
let buckets = fs.readFileSync(0).toString().trim().split('\n').map(v=>{
    const [max, current] = v.split(' ').map(Number);
    return {max,current};
});
const MAX = 100;
let count = 0;

const moveWater = (_to,_from)=>{
    // 시작이 포과인 경우 => 유지
    if(_to.current===_to.max){
        return [_to,_from];
    }
    const added = _from.current + _to.current;
    
    if(added <= _to.max){
        _to.current = added;
        _from.current = 0;
    }

    if(added > _to.max){
        _to.current = _to.max;
        _from.current = added-_to.current;
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


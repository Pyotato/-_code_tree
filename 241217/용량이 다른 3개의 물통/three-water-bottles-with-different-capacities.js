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
    
    // 옮길 곳의 최대보다 합이 작다면 모두 옮겨주고, 이전 버킷은 비워주기
    if(added <= _to.max){
        _to.current = added;
        _from.current = 0;
    }

    // 옮길 곳을 넘친다면 최대로만 물을 채워주고,
    // 이전 버킷은 이전 양에서 최대로 옮긴 양을 뺀 양만 둔다.
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
    // 0 1 2 중 3으로 나눈 나머지 인덱스, 즉 0 1 / 1 2 / 2 0 / 0 1의 버킷 가져오기
    const [iFrom,iTo] = [count%buckets.length,(count+1)%buckets.length];
    // 물을 옮긴 후의 물양들을 다시 버킷 배열에 할당
    const [newBucketTo,newBucketFrom]= moveWater(buckets[iTo],buckets[iFrom]);
    buckets.splice(iTo,1,newBucketTo);
    buckets.splice(iFrom,1,newBucketFrom);
    count++;
}


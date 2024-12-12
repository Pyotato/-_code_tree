const fs = require('fs');
const [N,...locationSpeed] = fs.readFileSync(0).toString().trim().split('\n');

const trains = locationSpeed.reduce((acc,curr,i)=>{
    const [location,speed] = curr.split(' ').map(v=>+v);
    acc[i+1] = {location,speed,joined:false};
    return acc;
},{});

const isJoined = (back,front)=>{
    if(front<=back){
        return true;
    }
    return false;
}

const syncSpeed = ()=>{
    const joinedSpeeds = [];
    const joined = new Set();
    for(let i=1;i<N;i++){
        if(trains[i].joined && trains[i+1].joined){
            joinedSpeeds.push(trains[i].speed);
            joinedSpeeds.push(trains[i+1].speed);
            joined.add(i);
            joined.add(i+1);
        }
    }
    const minSpeed = Math.min(...joinedSpeeds);
    [...joined].forEach(key=>trains[key].speed = minSpeed);
}

const isAllJoined = ()=>{
    return Object.values(trains).every((v)=>v.joined);
}

const canMeet = ()=>{
    const isNotJoinedKeys = Object.keys(trains).filter(key=>!trains[key].joined);
    const keys = [];
    for(let i=0;i<isNotJoinedKeys.length;i++){
        if(
        // 연속되거나
        +(isNotJoinedKeys[i])+1 === +isNotJoinedKeys[i+1] && 
        // 속도가 다른
        trains[isNotJoinedKeys[i]].speed != trains[isNotJoinedKeys[i+1]]?.speed){
            keys.push(isNotJoinedKeys[i]);
            keys.push(isNotJoinedKeys[i+1]);
        }
    }
    return keys.length>0;
}

while(true){
    Object.keys(trains).forEach((key)=>{
        trains[key].location+=trains[key].speed;
    });
    for(let i=1;i<Object.keys(trains).length;i++){
        if(isJoined(trains[i].location,trains[i+1].location)){
            trains[i].joined = true;
            trains[i+1].joined = true;
            // 앞 속도에 맞춰 이동
            syncSpeed();
        }
    } 
    
    // 모두 한 덩어리라면
    if(isAllJoined()){
        console.log(1);
        break;
    }

    if(!canMeet()){
      break;
      
    }
}

const joinedCount = Object.keys(trains).reduce((acc,curr)=>{
    if(trains[+curr].joined !== trains[+curr+1]?.joined){
        acc++;
    }
    return acc;
},0);

console.log(joinedCount);
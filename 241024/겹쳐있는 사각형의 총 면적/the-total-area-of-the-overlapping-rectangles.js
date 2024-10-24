const fs = require('fs');
const [_,...shapes] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let area = 0;

const pointLocation = (x,y)=>{
    if(x>=0 && y>=0){
        return 2; // 제 2사분면에 위치
    }
    if(x>=0 && y<=0){
        return 1; // 제 1사분면에 위치
    }
    if(x<=0 && y<=0){
        return 1; // 제 3사분면에 위치
    }
    if(x<=0 && y>=0){
        return 4; // 제 4사분면에 위치
    }
}

const isOverlapping = (shape1,shape2)=>{
    const [ax1,ay1,ax2,ay2] = shape1;
    const [bx1,by1,bx2,by2] = shape2;

    const sideA = Math.abs(ay1 - ay2);
    const sideB = Math.abs(by1 - by2);

    // topLeft, bottomLeft, bottomRight, topRight
    // console.log([[ax1, ay1],[ax1, ay1 - sideA],[ax2, ay2],[ax2,ay2+sideA]]);
    // topLeft, bottomLeft, bottomRight, topRight
    // console.log([[bx1, by1],[bx1, by1 - sideB],[bx2, by2],[bx2,by2+sideB]]);


    for(let i=ax1; i<=ax2;i++){
        for(let j=ay1 - sideA; j<=ay2+sideA;j++){
            const xOverlaps = i >= bx1 && i<= bx2;
            const yOverlaps = j >= by1 - sideB && j<= by2+sideB;
            if(xOverlaps && yOverlaps){
                return true;
            }
        }
    }
    return false;
}

const getOverlap = (shape1,shape2)=>{
    const [ax1,ay1,ax2,ay2] = shape1;
    const [bx1,by1,bx2,by2] = shape2;

    const sideA = Math.abs(ay1 - ay2);
    const sideB = Math.abs(by1 - by2);

    // overlapping
    const [topLeft, bottomLeft, bottomRight, topRight]= [[Math.max(ax1, bx1), Math.min(ay1, by1)],[Math.max(ax1, bx1), Math.max(ay1 - sideA, by1 - sideB)],[Math.min(ax2, bx2), Math.max(ay2, by2)],[Math.min(ax2, bx2),Math.min(ay2+sideA, by2+sideB)]];
    return Math.abs((topRight[1]-bottomRight[1])*(bottomLeft[0]-topLeft[1]));
}

while(shapes.length>0){
    const currentShape = shapes.splice(0,1)[0].split(' ').map(v => +v);
    const [ax1,ay1,ax2,ay2] = currentShape;
    const areaA  = Math.abs(ay1 - ay2) * Math.abs(ax1 - ax2);
    area+=areaA;
    shapes.map(shape=>{
        const otherShape = shape.split(' ').map(v => +v);
        const [bx1,by1,bx2,by2] = otherShape;
        // 두 도형이 겹친다면 겹치는 부분은 뺴고 더해주기
        if(isOverlapping(currentShape, otherShape)){
            area-=getOverlap(currentShape, otherShape);
        } else {
            const areaB  = Math.abs(by1 - by2) * Math.abs(bx1 - bx2);
            area+=areaB;
        }
    });
}

 console.log(area);

// const [_,shape1,shape2] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// const [ax1,ay1,ax2,ay2] = shape1.split(' ').map(v => +v);

// const [bx1,by1,bx2,by2] = shape2.split(' ').map(v => +v);

// const areaA  = Math.abs(ay1 - ay2) * Math.abs(ax1 - ax2);
// const areaB  = Math.abs(by1 - by2) * Math.abs(bx1 - bx2);
// const overlap = Math.abs(Math.min(by1,ay1)-Math.max(by2,ay2))*Math.abs(Math.max(bx1,ax1),Math.min(bx2,ax2));

// console.log(areaA+areaB-overlap)
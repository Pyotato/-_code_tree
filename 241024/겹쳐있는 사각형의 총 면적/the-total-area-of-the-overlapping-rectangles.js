const fs = require('fs');
const [_,shape1,shape2] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [ax1,ay1,ax2,ay2] = shape1.split(' ').map(v => +v);

const [bx1,by1,bx2,by2] = shape2.split(' ').map(v => +v);

const areaA  = Math.abs(ay1 - ay2) * Math.abs(ax1 - ax2);
const areaB  = Math.abs(by1 - by2) * Math.abs(bx1 - bx2);
const overlap = Math.abs(Math.min(by1,ay1)-Math.max(by2,ay2))*Math.abs(Math.max(bx1,ax1),Math.min(bx2,ax2));

console.log(areaA+areaB-overlap)
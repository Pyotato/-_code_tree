const fs = require('fs');
const str = fs.readFileSync(0).toString().trim().split('END');

console.log(str[0].trim().split('\n').reduce((acc,curr)=> acc+=([...curr].reverse().join('')+'\n'),''));
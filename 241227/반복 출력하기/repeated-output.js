const fs = require('fs');
const N = fs.readFileSync(0).toString().trim();

const str = `12345^&*()_`;

console.log(Array.from({length:+N},()=>str).join('\n'))
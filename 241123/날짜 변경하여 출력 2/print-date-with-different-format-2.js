const fs = require('fs');
const MMDDYYYY = fs.readFileSync('/dev/stdin').toString().trim();

const [mm,dd,yyyy]= MMDDYYYY.split('-');

console.log(`${yyyy}.${mm}.${dd}`);
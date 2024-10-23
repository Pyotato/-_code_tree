const fs = require('fs');
const N = +fs.readFileSync('/dev/stdin').toString().trim();

let alpha = 'A'.charCodeAt(0);
const Z_CHAR_CODE = 'Z'.charCodeAt(0);

const alphabets = Array.from({length:N},(_,i)=>[...Array.from({length:i},()=>' '),...Array.from({length:N-i},(_,j)=>{
    const currentAlpha = alpha> Z_CHAR_CODE? 'Z':  String.fromCharCode(alpha++);
    return currentAlpha;
})].join(' '));

console.log(alphabets.join('\n'));
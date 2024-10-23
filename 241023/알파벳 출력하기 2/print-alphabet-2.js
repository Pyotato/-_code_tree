const fs = require('fs');
const N = +fs.readFileSync('/dev/stdin').toString().trim();

const A_CHAR_CODE = 'A'.charCodeAt(0);
const Z_CHAR_CODE = 'Z'.charCodeAt(0);

let alpha = A_CHAR_CODE;

const alphabets = Array.from({length:N},(_,i)=>[...Array.from({length:i},()=>' '),...Array.from({length:N-i},(_,j)=>{
    const currentAlpha = alpha> Z_CHAR_CODE? 'Z':  String.fromCharCode(alpha++);
    if(currentAlpha==='Z'){
        alpha = A_CHAR_CODE;
    }
    return currentAlpha;
})].join(' '));

console.log(alphabets.join('\n'));
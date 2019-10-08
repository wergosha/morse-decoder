const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    let tenSymbols, twoSymbols = '';

    for (let i = 0; i < expr.length; i += 10) {
        tenSymbols = expr.slice(i, i + 10);
        tenSymbols = tenSymbols.padStart(10, '0');

        if (tenSymbols == '**********') {
            result += ' ';
        } else {

            for (let i = 0; i < 10; i += 2) {

                if (tenSymbols.slice(i, i + 2) == '10') {
                    twoSymbols += '.';
                }

                else if (tenSymbols.slice(i, i + 2) == '11') {
                    twoSymbols += '-';
                }
            }
            result += MORSE_TABLE[twoSymbols];
            twoSymbols = '';
        } 
    } 
    return result; 
} 

module.exports = {
    decode
}
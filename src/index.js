const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = [];
    let buf;
    let bufDecode = [];
    for (let i = 0; i < expr.length; i = i + 10) {
        buf = expr.slice(i, i + 10);
        if (buf === "**********") {
            result.push(" ");
        } else {
            for (let j = 0; j < buf.length; j = j + 2) {
                switch (buf.slice(j, j + 2)) {
                    case "11":
                        bufDecode.push("-");
                        break;
                    case "10":
                        bufDecode.push(".");
                        break;
                    default:
                        break;
                }
            }
            result.push(MORSE_TABLE[bufDecode.join("")]);
            bufDecode=[];
        }
    }
    return result.join("");
}


module.exports = {
    decode
};
function caesarCipher(str, shift) {
    const arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const map = Array.prototype.map;

    if (shift > 26 || shift < -26) shift = shift % 26;
    
    if (shift < 0) shift = 26 + shift;

    const newStr = map.call(str, strItem => {
        let newLetter;
        
        const lowerCaseLetter = arr_en.indexOf(strItem);

        const upperCaseLetterr = arr_EN.indexOf(strItem);

        if (lowerCaseLetter !== -1) newLetter = arr_en[(lowerCaseLetter + shift) % 26];
        if (upperCaseLetterr !== -1) newLetter = arr_EN[(upperCaseLetterr + shift) % 26];
        if (lowerCaseLetter === -1 && upperCaseLetterr === -1) newLetter = strItem;

        return newLetter;
    }).join('');

    return newStr;
}

module.exports = {caesarCipher};
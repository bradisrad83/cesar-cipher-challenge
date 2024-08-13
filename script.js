function encrypt() {
    const text = document.getElementById('textInput').value;
    const shift = parseInt(document.getElementById('shiftInput').value);
    const result = caesarCipher(text, shift);
    document.getElementById('resultOutput').textContent = result;
}

function decrypt() {
    const text = document.getElementById('textInput').value;
    const shift = parseInt(document.getElementById('shiftInput').value);
    const result = caesarCipher(text, -shift);
    document.getElementById('resultOutput').textContent = result;
}

function caesarCipher(str, shift) {
    return str.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt();

            // Uppercase letters
            if (code >= 65 && code <= 90) {
                return String.fromCharCode(((code - 65 + shift) % 26 + 26) % 26 + 65);
            }
            // Lowercase letters
            if (code >= 97 && code <= 122) {
                return String.fromCharCode(((code - 97 + shift) % 26 + 26) % 26 + 97);
            }
        }
        return char;
    }).join('');
}

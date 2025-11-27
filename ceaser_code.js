function caesarEncrypt(text, shift) {
    const aCode = "a".charCodeAt(0);
    const zCode = "z".charCodeAt(0);
    const ACode = "A".charCodeAt(0);
    const ZCode = "Z".charCodeAt(0);

    let result = "";

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const code = text.charCodeAt(i);

        if (code >= aCode && code <= zCode) {
            const shifted = ((code - aCode + shift) % 26 + 26) % 26 + aCode;
            result += String.fromCharCode(shifted);
        } else if (code >= ACode && code <= ZCode) {
            const shifted = ((code - ACode + shift) % 26 + 26) % 26 + ACode;
            result += String.fromCharCode(shifted);
        } else {
            result += char;
        }
    }

    return result;
}

function caesarDecrypt(text, shift) {
    return caesarEncrypt(text, -shift);
}

const message = "Hello, World!";
const shift = 3;

const encrypted = caesarEncrypt(message, shift);
const decrypted = caesarDecrypt(encrypted, shift);

console.log("Оригінал:", message);
console.log("Зашифровано:", encrypted);
console.log("Розшифровано:", decrypted);

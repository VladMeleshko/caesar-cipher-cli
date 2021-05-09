const fs = require('fs');
const { stdinCommand } = require('./caesar-cipler-cli');
const { caesarCipher } = require('./caesar-cipher');
const { Transform } = require('stream');
const { action, shift, input, output } = stdinCommand();

let readableStream;
if (input) readableStream = fs.createReadStream(input);

let writableStream;
if (output) writableStream = fs.createWriteStream(output, {flags: 'a'});

const caesarCipherTransform = new Transform({
    transform(chunk, encoding, callback) {
        if (action === 'encode') this.push(caesarCipher(chunk.toString(), shift));
        if (action === 'decode') this.push(caesarCipher(chunk.toString(), -shift));
        callback();
    }
});

if (input && output) {
    readableStream.pipe(caesarCipherTransform).pipe(writableStream);
} else if (input && !output) {
    readableStream.pipe(caesarCipherTransform).pipe(process.stdout);
} else if (!input && output) {
    process.stdin.pipe(caesarCipherTransform).pipe(writableStream);
} else if (!input && !output) {
    process.stdin.pipe(caesarCipherTransform).pipe(process.stdout);
}

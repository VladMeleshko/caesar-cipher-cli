const fs = require('fs');

const createReadStreamCall = (path) => {
    const readableStream = fs.createReadStream(path);
    readableStream.on('data', chunks => {
        console.log(chunks.toString());
    })
}

module.exports = {
    createReadStreamCall,
}
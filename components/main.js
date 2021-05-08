const { createReadStreamCall } = require('./fileWorkServices');
const { caesarCipher } = require('./caesar-cipher');

createReadStreamCall('test.txt');
caesarCipher();
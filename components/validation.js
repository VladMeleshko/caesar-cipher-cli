const fs = require('fs');

function validation(action, shift, input, output) {
    function isInteger(num) {
        return (num ^ 0) === num;
    }
    
    if (action !== 'encode' && action !== 'decode') {
        process.stderr.write('action parameter is set incorrectly');
        process.exit(-1);
    }
    
    if (!isInteger(+shift)) {
        process.stderr.write('shift parameter is set incorrectly');
        process.exit(-1);
    }
    
    if (input &&!fs.existsSync(input)) {
        process.stderr.write('input file is not exist');
        process.exit(-1);
    }
    
    if (output && !fs.existsSync(output)) {
        process.stderr.write('output file is not exist');
        process.exit(-1);
    }
}

module.exports = {validation};
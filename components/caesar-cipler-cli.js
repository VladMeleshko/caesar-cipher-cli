const args = process.argv.slice(2);

let action, shift, input, output;

for (let i = 0; i < args.length; i++) {
    if (args[i] === '-a' || args[i] === '--action') action = args[i + 1];
    if (args[i] === '-s' || args[i] === '--shift') shift = args[i + 1];
    if (args[i] === '-i' || args[i] === '--input') input = args[i + 1];
    if (args[i] === '-o' || args[i] === '--output') output = args[i + 1];
}

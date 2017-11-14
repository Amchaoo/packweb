const program = require('commander');
const packweb = require('../lib/packweb');

program
.version('0.1.0')
.option('-i, --input', 'file entry to pack')
.option('-o, --output', 'dir to store bundled js')
.parse(process.argv);

const options = {};

options.input = program.input || program.argv[2];
options.output = program.output || program.argv[3];

packweb(options);



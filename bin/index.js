#!/usr/bin/env node

var argv = require('yargs')
    .usage('md2slides,\n Usage: md2slides inputFile.md outputSlidesFile.html')
    .demand(2)
    .help('h')
    .alias('h', 'help')
    .epilog('Remember to copy also the (created) remark*.js file')
    .argv;

var app = require('../app')();
app.init(argv._[0], argv._[1]);
app.run();

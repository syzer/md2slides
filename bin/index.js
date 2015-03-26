#!/usr/bin/env node

var file, fileOut;

if (process.argv.length <= 2) {
    console.log('md2slides, usage:');
    console.log('-----------------');
    console.log('md2slides inputFile.md > outputFile.html');
    return;
} else {
    file = process.argv[2];
    fileOut = process.argv[3];
}

var app = require('../app')();
app.init(file, fileOut);
app.run();

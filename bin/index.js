#!/usr/bin/env node


var file = '';

if (process.argv.length > 2) {
    file = process.argv[2];
}


var app = require('../app')();
app.init(file);
app.run();

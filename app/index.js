/**
 * Created by syzer on 3/4/2015.
 */
module.exports = function() {
    'use strict';

    var fs, footer, header, remark, md, outputFile, remarkJs;

    return {
        init: function(markdownFile, htmlFile) {
            fs = require('fs');
            footer = fs.readFileSync(__dirname + '/footer.html', 'utf8');
            header = fs.readFileSync(__dirname + '/header.html', 'utf8');
            remark = fs.readFileSync(__dirname + '/remark.html', 'utf8');
            remarkJs = fs.readFileSync(__dirname + '/remark-latest.min.js', 'utf8');
            md = fs.readFileSync(markdownFile);
            outputFile = htmlFile;
        },
        run: function() {
            fs.writeFileSync(outputFile, header + md + remark + footer);
            //TODO test + real path
            fs.writeFileSync('./remark-latest.min.js', remarkJs);
        }
    }
};

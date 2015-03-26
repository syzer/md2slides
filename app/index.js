/**
 * Created by syzer on 3/4/2015.
 */
module.exports = function() {
    'use strict';

    var fs, footer, header, remark, md;

    return {
        init: function(markdownFile) {
            fs = require('fs');
            footer = fs.readFileSync(__dirname + '/footer.html', 'utf8');
            header = fs.readFileSync(__dirname + '/header.html', 'utf8');
            remark = fs.readFileSync(__dirname + '/remark.html', 'utf8');
            md = fs.readFileSync(markdownFile);
        },
        run: function() {
            console.log(header + md + remark + footer);
        }
    }
};

/**
 * Created by syzer on 3/26/2015.
 */
var chai = require('chai');
var expect = chai.expect;
var fs = require('fs');

describe('fileCreationTest', function () {
    describe('normal creation', function () {
        after(function() {
            fs.unlinkSync(process.argv[3]);
        });
        //it('prints usage after no params in exec', function () {
        //    var bin = require('../bin/index');

            //var fileCreated = fs.lstatSync(process.argv[3]).isFile();
            //expect(true).to.be.true;
        //});

        it('creates html file based on md', function () {
            process.argv[2]='test/fixture.md';
            process.argv[3]='test.html';

            var bin = require('../bin/index');

            var fileCreated = fs.lstatSync(process.argv[3]).isFile();
            expect(fileCreated).to.be.true;
        })
    })
});

var assert = require('chai').assert;
var app = require('../server.js');

describe('Votes', function(){
    describe('voteObject can be added to', function(){
        it('should be instantiated with empty object', function(){
            var votes = app.votes;
            assert.equal(votes, {});
        });
        it('should be incremented when vote is cast', function(){
            var count = app.countVotes({'1': 'C'});
            assert.equal(count, { A: 0, B: 0, C: 1, D: 0 });
        });
    });
});
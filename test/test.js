var assert = require('chai').assert
const app = require('../server.js')

describe('Votes', function(){
    describe('voteObejct can be added to', function(){
        it('should be instantiated with empty object', function(){
            app.votes.should.equal({})
        })
        it('should be incremented when vote is cast', function(){
            app.countVotes('C')
            app.votes.should.equal({
                A: 0,
                B: 0,
                C: 1,
                D: 0
            })
        })
    })
})